'use strict';

const fs = require('fs');
const path = require('path');
const url = require('url');
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./api/db');
const lessontempl = require('./api/lessontempl');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// app.use(express.static(path.join(__dirname, 'admin/public/')));
app.use(express.static(path.join(__dirname, 'front/public')));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/api/main', (req, res) => {
  db.Messages.findAll({
      attributes: ['name', 'lang', 'content']
    })
    .then(data => {
      let messages = shareByLang(data);

      res.send({
        messages,
        lang: 'ru'
      });
    });
});

app.get('/api/topics', (req, res) => {

  db.Topics.findAll({
      attributes: ['title', 'path']
    })
    .then(data => {
      let topics = data;
      topics = topics.map(item => item.get());

      return topics;
    })
    .then(topics => {
      db.Structure.findAll({
          attributes: ['lessonId', 'title', 'topic', 'author', 'preview_text', 'image']
        })
        .then(data => {
          let lessons = data;
          lessons = lessons.map(item => item.get());

          res.send({
            topics,
            lessons
          });
        });
    });
});

app.post('/api/user', (req, res) => {
  const logUser = req.body.logUser;
  console.log('+++', logUser, req.body);

  db.Users.findOne({
    attributes: ['username', 'login', 'password', 'role'],
    where: {
      login:    req.body.login,
      password: req.body.password
    }
  })
    .then(data => {
      let user = data;
      if(user){
        user = user.get();
      }

      res.send({
        user
      });
    });
});

app.get('/api/lesson/:lessonId', (req, res) => {
  let lesson = {};

  if(req.params.lessonId === 'new') {
    lesson = lessontempl;

    db.Topics.findAll({
      attributes: ['title', 'path']
    }).then(data => {
      let topics = data;
      topics = topics.map(item => item.get());

      res.send({
        lesson: getLesson(lesson),
        topics
      });
    });


  } else {
    let p0 = db.Structure.findOne({
        attributes: ['lessonId', 'title', 'topic', 'author', 'preview_text', 'image', 'group', 'color'],
        where: {lessonId: req.params.lessonId}
      });

    let p1 = db.Levels.findAll({
        attributes: ['board', 'ansver', 'defansver', 'before', 'after'],
        where: {lessonId: req.params.lessonId},
        order: [['level', 'ASC']]
      });

    let p2 = db.Instructions.findAll({
        attributes: ['level','lang', 'content'],
        where: {lessonId: req.params.lessonId},
        order: [['level', 'ASC']]
      });

    let p3 = db.LevelWin.findOne({
        attributes: ['board', 'ansver', 'style'],
        where: {lessonId: req.params.lessonId}
      });

    let p4 = db.InstructionsWin.findAll({
        attributes: ['lang', 'content'],
        where: {lessonId: req.params.lessonId}
      });

    let p5 = db.Topics.findAll({
      attributes: ['title', 'path']
    });

    Promise.all([p0, p1, p2, p3, p4, p5]).then(datas => { 
      let structure = datas[0].get();

      structure.group = JSON.parse(structure.group);

      lesson.structure = structure;

      let levels = datas[1];
      levels = levels.map(item => {
        let level = item.get();
        level.instructions = {};
        return level;
      });

      let instructions = datas[2];
      instructions.forEach(item => {
        let dataItem = item.get();

        levels[dataItem.level].instructions[dataItem.lang] = dataItem.content;
      });

      lesson.levels = levels;

      let levelWin = datas[3].get();

      let instructionsWin = datas[4];
      instructionsWin.forEach(item => {
        let dataItem = item.get();

        levelWin.instructions = levelWin.instructions || {};
        levelWin.instructions[dataItem.lang] = dataItem.content;
      });

      lesson.levelWin = levelWin;

      let topics = datas[5];
      topics = topics.map(item => item.get());

      res.send({
        lesson: getLesson(lesson),
        topics
      });
    });      
  }
});

app.put('/api/lesson', (req, res) => {
  const lesson = req.body.lesson;
  const headerURL = url.parse(req.headers.referer);
  let info = {
    newUrl: null
  };

  if(headerURL.pathname === '/lessons/new/new') {
    if(lesson.structure.lessonId && lesson.structure.topic){
      info.newUrl = '/lessons/' + lesson.structure.lessonId + '/' + lesson.structure.topic;
    }

    // structure
    lesson.structure.group = JSON.stringify(lesson.structure.group);

    db.Structure.upsert( lesson.structure );

    // levels
    lesson.levels.forEach((level, i) => {
      let result = Object.assign({ lessonId: lesson.structure.lessonId, level: i}, level);
      delete result.instructions;
      db.Levels.upsert( result );
    });

    // instructions
    lesson.levels.forEach((level, i) => {
      for(let lang in level.instructions) {
        db.Instructions.upsert(
        { lessonId: lesson.structure.lessonId, 
          level: i, 
          lang, 
          content: level.instructions[lang]});
      }
    });

    // levelWin
    let result = Object.assign({ lessonId: lesson.structure.lessonId}, lesson.levelWin);
    result.ansver = JSON.stringify(result.ansver);
    delete result.instructions;

    db.LevelWin.upsert(
      result);

    // instructionsWin
    for(let lang in lesson.levelWin.instructions) {
      db.InstructionsWin.upsert(
        { lessonId: lesson.structure.lessonId, 
          lang, 
          content: lesson.levelWin.instructions[lang] });
    }

    res.json(info); 
  } else {
    // structure
    lesson.structure.group = JSON.stringify(lesson.structure.group);

    db.Structure.update(
      lesson.structure, 
      { where: {lessonId: lesson.structure.lessonId} });

    // levels

    db.Levels.destroy({ where: {lessonId: lesson.structure.lessonId} })
    .then(() => {    
      lesson.levels.forEach((item, i) => {
        let result = Object.assign({ lessonId: lesson.structure.lessonId, level: i}, item);
        delete result.instructions;

        console.log(i);

        db.Levels.upsert( result )
      });
    });

    // instructions
    db.Instructions.destroy({ where: {lessonId: lesson.structure.lessonId} })
    .then(() => {    
      lesson.levels.forEach((level, i) => {
        for(let lang in level.instructions) {
          db.Instructions.upsert({ 
            lessonId: lesson.structure.lessonId, 
            level: i, 
            lang, 
            content: level.instructions[lang] });
        }
      });
    });

    // levelWin
    let result = Object.assign({ lessonId: lesson.structure.lessonId}, lesson.levelWin);
    delete result.instructions;

    db.LevelWin.update(
      result, 
      { where: {lessonId: lesson.structure.lessonId} });

    // instructionsWin
    for(let lang in lesson.levelWin.instructions) {
      db.InstructionsWin.update(
        { lessonId: lesson.structure.lessonId, 
          lang, 
          content: lesson.levelWin.instructions[lang] }, 
        { where: {lessonId: lesson.structure.lessonId, 
                  lang } });
    }

    res.json(info);    
  }
});

app.delete('/api/lesson/:lessonId', (req, res) => {
  let p0 = db.Structure.destroy({ where: {lessonId: req.params.lessonId} });

  let p1 = db.Levels.destroy({ where: {lessonId: req.params.lessonId} });

  let p2 = db.Instructions.destroy({ where: {lessonId: req.params.lessonId} });

  let p3 = db.LevelWin.destroy({ where: {lessonId: req.params.lessonId} });

  let p4 = db.InstructionsWin.destroy({ where: {lessonId: req.params.lessonId} });

  Promise.all([p0, p1, p2, p3, p4]).then(datas => { 
    res.sendStatus(204);
  });
});


app.get('/admin/*', (req, res) => {
  console.log('*/admin.html');
  res.sendFile(path.join(__dirname, '/admin/public/index.html'));
});

app.get('/*', (req, res) => {
  console.log('front.html');
  res.sendFile(path.join(__dirname, '/front/public/index.html'));
});

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));


// Инициализация ==================================================================================
// Инициализация пользовательского состояния
function getLesson(lesson) {
  let resState = {
    level: 0,
    newUrl: null,
    incorrField: {},
    statusWin: false,
    winStyle: {},
    lesson: {},
    stateUser: []
  };

  resState.lesson = lesson;

  let levels = resState.lesson.levels;

  resState.stateUser = Array(levels.length).fill(null).map((item, i) => {
    let questionStyle = [];
    let ansverStyle = [];
    let answer = '';

    if(lesson.structure.topic === 'css'){
      questionStyle = getArrayStyle( levels[i].before + levels[i].after );
      let strStyleAnswer = levels[i].ansver;
      ansverStyle = getArrayStyle( levels[i].before + strStyleAnswer + levels[i].after );
    } else {
      answer = levels[i].defansver;
    }

    return {
      passed: false,
      answer,
      ansverStyle,
      questionStyle
    };
  });

  resState.winStyle = getArrayStyle( resState.lesson.levelWin.style );

  return resState;
}

// Разбор строки стилей в массив
function getArrayStyle (strStyle) {
  let arrStyle = '{' + strStyle + '}';

  arrStyle = arrStyle.replace(/([{}])\s*([^{}:;"]*)\s+{/g, '$1 "$2": {')
             .replace(/([{;])\s*([^{}:;"]*)\s*:/g, '$1 "$2": ')
             .replace(/:\s*([^{}"]+)\s*;/g, ': "$1";')              // добавление кавычек
             .replace(/;/g, '')                                       // удаление всех ;
             .replace(/(["}])(\s+["{])/g, '$1,$2');
  // преобразование в верблюжью нотацию
  arrStyle = arrStyle.replace(/-(\w)(\w*":)/g, (match, p1, p2) => p1.toUpperCase() + p2);
  arrStyle = arrStyle.replace(/-(\w)(\w*":)/g, (match, p1, p2) => p1.toUpperCase() + p2); 

  return JSON.parse(arrStyle);
}

function shareByLang(content) {
  let result = {};

  content.forEach(item => {
    let dataItem = item.get();
    result[dataItem.name] = result[dataItem.name] || {};
    result[dataItem.name][dataItem.lang] = dataItem.content;
  });

  return result;
}