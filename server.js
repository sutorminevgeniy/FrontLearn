'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');



const sequelize = require('./configdb');

const Topics = sequelize.define('topics', {});
const Messages = sequelize.define('messages', {});


// const messages = require('./api/messages');
const lessons = require('./api/lessons');

const lessonsTopics = lessons.map(lesson => ({
  topic: lesson.structure.topic,
  lessonId: lesson.structure.lessonId,
  title: lesson.structure.title,
  author: lesson.structure.author,
  image: lesson.structure.image,
  preview_text: lesson.structure.preview_text
}))

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/api/main', (req, res) => {
  Messages.findAll({
      attributes: ['name', 'lang', 'content']
    })
    .then(data => {
      let messages = shareByLang(data);

      console.log(messages);

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

      res.send({
        topics,
        lessons: lessonsTopics
      });
    });
});

app.get('/api/lesson/:lessonId', (req, res) => {
  res.send(getLesson(req.params.lessonId));
});

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));


// Инициализация ==================================================================================
// Инициализация пользовательского состояния
function getLesson(lessonId) {
  let resState = {
    level: 0,
    statusWin: false,
    lesson: {},
    stateUser: []
  };
  resState.lesson = lessons.filter(lesson => lesson.structure.lessonId === lessonId)[0];
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