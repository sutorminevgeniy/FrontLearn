'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./api/db');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


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

  Topics.findAll({
      attributes: ['title', 'path']
    })
    .then(data => {
      let topics = data;
      topics = topics.map(item => item.get());

      return topics;
    })
    .then(topics => {
      Structure.findAll({
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

app.get('/api/lesson/:lessonId', (req, res) => {
  let lesson = {};

  let p0 = db.Structure.findOne({
      attributes: ['lessonId', 'title', 'topic', 'author', 'preview_text', 'image', 'group', 'color'],
      where: {lessonId: req.params.lessonId}
    });

  let p1 = db.Levels.findAll({
      attributes: ['name', 'board', 'style', 'before', 'after'],
      where: {lessonId: req.params.lessonId},
      order: [['level', 'ASC']]
    });

  let p2 = db.Instructions.findAll({
      attributes: ['level','lang', 'content'],
      where: {lessonId: req.params.lessonId},
      order: [['level', 'ASC']]
    });

  let p3 = db.LevelWin.findOne({
      attributes: ['name', 'board', 'style', 'before', 'after'],
      where: {lessonId: req.params.lessonId}
    });

  let p4 = db.InstructionsWin.findAll({
      attributes: ['lang', 'content'],
      where: {lessonId: req.params.lessonId}
    });

  Promise.all([p0, p1, p2, p3, p4]).then(datas => { 
    let structure = datas[0].get();

    structure.group = JSON.parse(structure.group);
    structure.color = JSON.parse(structure.color);

    lesson.structure = structure;

    let levels = datas[1];
    levels = levels.map(item => {
      let level = item.get();
      level.style = JSON.parse(level.style);
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
    levelWin.style = JSON.parse(levelWin.style);

    let instructionsWin = datas[4];
    instructionsWin.forEach(item => {
      let dataItem = item.get();

      levelWin.instructions = levelWin.instructions || {};
      levelWin.instructions[dataItem.lang] = dataItem.content;
    });

    lesson.levelWin = levelWin;

    res.send(getLesson(lesson));
  });    
});

app.put('/api/lesson', (req, res) => {
    const lesson = req.body.lesson;

    lesson.structure.group = JSON.stringify(lesson.structure.group);
    lesson.structure.color = JSON.stringify(lesson.structure.color);

    db.Structure.update( lesson.structure, 
        { fields: ['lessonId', 'title', 'topic', 'author', 'preview_text', 'image', 'group', 'color'],
          where: {lessonId: lesson.structure.lessonId} })
      .then((data) => {
        console.log(data);
    });


    console.log(lesson.structure);

    res.json(lesson);
});

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));


// Инициализация ==================================================================================
// Инициализация пользовательского состояния
function getLesson(lesson) {
  let resState = {
    level: 0,
    statusWin: false,
    lesson: {},
    stateUser: []
  };

  resState.lesson = lesson;

  let levels = resState.lesson.levels;

  resState.stateUser = Array(levels.length).fill(null).map((item, i) => {
    let questionStyle = getArrayStyle( levels[i].before + levels[i].after );
    let strStyleAnswer = getStrStyle( levels[i].style );
    let ansverStyle = getArrayStyle( levels[i].before + strStyleAnswer + levels[i].after );

    return {
      passed: false,
      answer: '',
      ansverStyle,
      questionStyle
    };
  });

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

// Разбор массива стилей в строку
function getStrStyle(arrStyle) {
  let strStyle = JSON.stringify(arrStyle);

  strStyle = strStyle.replace(/[{}"]/g, '')
             .replace(/:/g, ': ')
             .replace(/,/g, '; ');

  return strStyle + ';';
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