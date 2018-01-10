const Topics = sequelize.define('topics', {
  path: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  }
});

Topics.sync({force: true})
  // .then(() => {
  //   return Topics.create({
  //     path:  'css',
  //     title: 'CSS'
  //   });
  // })
  .then(() => {
    return Topics.bulkCreate([
      {path: 'css', title: 'CSS'},
      {path: 'html', title: 'HTML'},
      {path: 'javascript', title: 'JavaScript'}
    ]);
  })
  // .then(() => {
  //   Topics.destroy({ force: true });
  // })
  .then(() => {
    Topics.findAll({
        attributes: ['title', ['path', 'id']]
      })
      .then(topics => {
        console.log(topics)
      });
  });