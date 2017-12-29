'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');



const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  storage: 'api/database.sqlite',
  operatorsAliases: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Соединение установлено.');
  })
  .catch(err => {
    console.error('Ошибка соединения:', err);
  });

const Topics = sequelize.define('topics', {
  path: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  }
});


Topics.sync({force: true}).then(() => {
  return Topics.create({
    path: 'css',
    title: 'CSS'
  });
});

Topics.findAll().then(topics => {
  console.log(topics)
})






const messages = require('./api/messages');
const topics = require('./api/topics');
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
  res.send({
    messages,
    lang: 'ru'
  });
});

app.get('/api/topics', (req, res) => {
  res.send({
    topics,
    lessons: lessonsTopics
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
