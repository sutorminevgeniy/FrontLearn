const Sequelize = require('sequelize');
const sequelize = require('./configdb');


// topics
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
  // .then(() => {
  //   Topics.findAll({
  //       attributes: ['title', 'path']
  //     })
  //     .then(topics => {
  //       console.log(topics)
  //     });
  // });


// messages
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
  });


// docs
const initDocs = require('./api/docs');
let dataDocs = [];
for(let name in initDocs) {
  for(let lang in initDocs[name]) {
    dataDocs.push({name, lang, content: initDocs[name][lang]});
  }
}

const Docs = sequelize.define('docs', {
    name:    { type: Sequelize.STRING },
    lang:    { type: Sequelize.STRING },
    content: { type: Sequelize.TEXT }
  });
Docs.sync({force: true})
  .then(() => {
    return Docs.bulkCreate(dataDocs);
  });


const initLessons = require('./api/lessons');

// structure
let dataStructure = initLessons.map(item => {
  let result = item.structure;

  result.group = JSON.stringify(result.group);
  result.color = JSON.stringify(result.color);

  return result;
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
Structure.sync({force: true})
  .then(() => {
    return Structure.bulkCreate(dataStructure);
  })
  .then(() => {
    Structure.findAll({
        attributes: ['lessonId', 'title', 'topic', 'author', 'preview_text', 'image', 'group', 'color']
      })
      .then(data => {
        console.log(data)
      });
  });

// levels
let dataLevels = [];
initLessons.forEach(lesson => {
  lesson.levels.forEach((level, i) => {
    let result = Object.assign({ lessonId: lesson.structure.lessonId, level: i}, level);
    result.style = JSON.stringify(result.style);
    delete result.instructions;

    dataLevels.push(result);
  });
});

const Levels = sequelize.define('levels', {
    lessonId: { type: Sequelize.STRING },
    level:    { type: Sequelize.INTEGER },
    name:     { type: Sequelize.STRING },
    board:    { type: Sequelize.STRING },
    style:    { type: Sequelize.TEXT },
    before:   { type: Sequelize.TEXT },
    after:    { type: Sequelize.TEXT }
  });

Levels.sync({force: true})
  .then(() => {
    return Levels.bulkCreate(dataLevels);
  })

// instructions
let dataInstructions = [];
initLessons.forEach(lesson => {
  lesson.levels.forEach((level, i) => {
    for(let lang in level.instructions) {
      let result = { lessonId: lesson.structure.lessonId, level: i};

      result.lang = lang;
      result.content = level.instructions[lang];

      dataInstructions.push(result);
    }
  });
});

const Instructions = sequelize.define('instructions', {
    lessonId: { type: Sequelize.STRING },
    level:    { type: Sequelize.INTEGER },
    lang:    { type: Sequelize.STRING },
    content: { type: Sequelize.TEXT }
  });
Instructions.sync({force: true})
  .then(() => {
    return Instructions.bulkCreate(dataInstructions);
  });


// levelsWin
let dataLevelsWin = [];
initLessons.forEach(lesson => {
  let result = Object.assign({ lessonId: lesson.structure.lessonId}, lesson.levelWin);
  result.style = JSON.stringify(result.style);
  delete result.instructions;

  dataLevelsWin.push(result);
});

const LevelsWin = sequelize.define('levelsWin', {
    lessonId: { type: Sequelize.STRING },
    name:     { type: Sequelize.STRING },
    board:    { type: Sequelize.STRING },
    style:    { type: Sequelize.TEXT },
    before:   { type: Sequelize.TEXT },
    after:    { type: Sequelize.TEXT }
  });

LevelsWin.sync({force: true})
  .then(() => {
    return LevelsWin.bulkCreate(dataLevelsWin);
  })


// instructionsWin
let dataInstructionsWin = [];
initLessons.forEach(lesson => {
  for(let lang in lesson.levelWin.instructions) {
    let result = { lessonId: lesson.structure.lessonId};

    result.lang = lang;
    result.content = lesson.levelWin.instructions[lang];

    dataInstructionsWin.push(result);
  }
});

const InstructionsWin = sequelize.define('instructionsWin', {
    lessonId: { type: Sequelize.STRING },
    lang:    { type: Sequelize.STRING },
    content: { type: Sequelize.TEXT }
  });
InstructionsWin.sync({force: true})
  .then(() => {
    return InstructionsWin.bulkCreate(dataInstructionsWin);
  });
