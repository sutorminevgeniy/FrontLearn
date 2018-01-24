const db = require('./api/db');


// topics
const initTopics = require('./api/topics');

db.Topics.sync({force: true})
  // .then(() => {
  //   return db.Topics.create({
  //     path:  'css',
  //     title: 'CSS'
  //   });
  // })
  // .then(() => {
  //   return db.Topics.bulkCreate([
  //     {path: 'css', title: 'CSS'},
  //     {path: 'html', title: 'HTML'},
  //     {path: 'javascript', title: 'JavaScript'}
  //   ]);
  // })
  // .then(() => {
  //   db.Topics.findAll({
  //       attributes: ['title', ['path', 'id']]
  //     })
  //     .then(topics => {
  //       console.log(topics)
  //     });
  // })
  .then(() => {
    return db.Topics.bulkCreate(initTopics);
  })
  // .then(() => {
  //   db.Topics.findAll({
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

db.Messages.sync({force: true})
  .then(() => {
    return db.Messages.bulkCreate(dataMessage);
  });


// docs
const initDocs = require('./api/docs');
let dataDocs = [];
for(let name in initDocs) {
  for(let lang in initDocs[name]) {
    dataDocs.push({name, lang, content: initDocs[name][lang]});
  }
}

db.Docs.sync({force: true})
  .then(() => {
    return db.Docs.bulkCreate(dataDocs);
  });


const initLessons = require('./api/lessons');

// structure
let dataStructure = initLessons.map(item => {
  let result = item.structure;

  result.group = JSON.stringify(result.group);
  result.color = JSON.stringify(result.color);

  return result;
});

db.Structure.sync({force: true})
  .then(() => {
    return db.Structure.bulkCreate(dataStructure);
  });

// levels
let dataLevels = [];
initLessons.forEach(lesson => {
  lesson.levels.forEach((level, i) => {
    let result = Object.assign({ lessonId: lesson.structure.lessonId, level: i}, level);
    if(lesson.structure.topic === 'css'){
      result.ansver = JSON.stringify(result.ansver);
    }
    delete result.instructions;

    dataLevels.push(result);
  });
});

db.Levels.sync({force: true})
  .then(() => {
    return db.Levels.bulkCreate(dataLevels);
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

db.Instructions.sync({force: true})
  .then(() => {
    return db.Instructions.bulkCreate(dataInstructions);
  });


// levelWin
let dataLevelsWin = [];
initLessons.forEach(lesson => {
  let result = Object.assign({ lessonId: lesson.structure.lessonId}, lesson.levelWin);
  result.ansver = JSON.stringify(result.ansver);
  delete result.instructions;

  dataLevelsWin.push(result);
});

db.LevelWin.sync({force: true})
  .then(() => {
    return db.LevelWin.bulkCreate(dataLevelsWin);
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

db.InstructionsWin.sync({force: true})
  .then(() => {
    return db.InstructionsWin.bulkCreate(dataInstructionsWin);
  });
