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

const Messages = sequelize.define('messages', {
    name:    { type: Sequelize.STRING },
    lang:    { type: Sequelize.STRING },
    content: { type: Sequelize.TEXT }
  });

const Docs = sequelize.define('docs', {
    name:    { type: Sequelize.STRING },
    lang:    { type: Sequelize.STRING },
    content: { type: Sequelize.TEXT }
  });

const Topics = sequelize.define('topics', {
    path:  { type: Sequelize.STRING },
    title: { type: Sequelize.STRING }
  });

const Structure = sequelize.define('structure', {
    lessonId:     { type: Sequelize.STRING },
    title:        { type: Sequelize.STRING },
    topic:        { type: Sequelize.STRING },
    author:       { type: Sequelize.STRING },
    preview_text: { type: Sequelize.STRING },
    image:        { type: Sequelize.STRING },
    group:        { type: Sequelize.TEXT },
    color:        { type: Sequelize.TEXT }
  });

const Levels = sequelize.define('levels', {
    lessonId:  { type: Sequelize.STRING },
    level:     { type: Sequelize.INTEGER },
    name:      { type: Sequelize.STRING },
    board:     { type: Sequelize.STRING },
    ansver:    { type: Sequelize.TEXT },
    defansver: { type: Sequelize.TEXT },
    before:    { type: Sequelize.TEXT },
    after:     { type: Sequelize.TEXT }
  });

const Instructions = sequelize.define('instructions', {
    lessonId: { type: Sequelize.STRING },
    level:    { type: Sequelize.INTEGER },
    lang:     { type: Sequelize.STRING },
    content:  { type: Sequelize.TEXT }
  });

const LevelWin = sequelize.define('levelWins', {
    lessonId: { type: Sequelize.STRING },
    name:     { type: Sequelize.STRING },
    board:    { type: Sequelize.STRING },
    ansver:   { type: Sequelize.TEXT },
    before:   { type: Sequelize.TEXT },
    after:    { type: Sequelize.TEXT }
  });

const InstructionsWin = sequelize.define('instructionsWins', {
    lessonId: { type: Sequelize.STRING },
    lang:     { type: Sequelize.STRING },
    content:  { type: Sequelize.TEXT }
  });

module.exports = {
  Messages,
  Docs,
  Topics,  
  Structure, 
  Levels, 
  Instructions, 
  LevelWin, 
  InstructionsWin 
};