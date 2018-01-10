const Sequelize = require('sequelize');
const sequelize = require('./configdb');


const initTopics = require('./api/topics');

const Topics = sequelize.define('topics', {
  path:  { type: Sequelize.STRING },
  title: { type: Sequelize.STRING }
});

Topics.sync({force: true})
  // .then(() => {
  //   return Topics.create({
  //     path:  'css',
  //     title: 'CSS'
  //   });
  // })
  // .then(() => {
  //   return Topics.bulkCreate([
  //     {path: 'css', title: 'CSS'},
  //     {path: 'html', title: 'HTML'},
  //     {path: 'javascript', title: 'JavaScript'}
  //   ]);
  // })
  // .then(() => {
  //   Topics.findAll({
  //       attributes: ['title', ['path', 'id']]
  //     })
  //     .then(topics => {
  //       console.log(topics)
  //     });
  // })
  .then(() => {
    return Topics.bulkCreate(initTopics);
  })
  .then(() => {
    Topics.findAll({
        attributes: ['title', 'path']
      })
      // .then(topics => {
      //   console.log(topics)
      // });
  });


const initMessages = require('./api/messages');
let dataMessage = [];

for(let name in initMessages) {
  for(let lang in initMessages[name]) {
    dataMessage.push({name, lang, content: initMessages[name][lang]});
  }
}

const Messages = sequelize.define('messages', {
  name:    { type: Sequelize.STRING },
  lang:    { type: Sequelize.STRING },
  content: { type: Sequelize.TEXT }
});

Messages.sync({force: true})
  .then(() => {
    return Messages.bulkCreate(dataMessage);
  })
  .then(() => {
    Messages.findAll({
        attributes: ['name', 'name', 'content']
      })
      // .then(messages => {
      //   console.log(messages)
      // });
  });


const initDocs = require('./api/docs');
let dataDocs = [];

for(let name in initDocs) {
  for(let lang in initDocs[name]) {
    dataDocs.push({name, lang, content: initDocs[name][lang]});
  }
}

console.log(initDocs, dataDocs);

const Docs = sequelize.define('docs', {
  name:    { type: Sequelize.STRING },
  lang:    { type: Sequelize.STRING },
  content: { type: Sequelize.TEXT }
});

Docs.sync({force: true})
  .then(() => {
    return Docs.bulkCreate(dataDocs);
  })
  .then(() => {
    Docs.findAll({
        attributes: ['name', 'name', 'content']
      })
      .then(docs => {
        console.log(docs)
      });
  });