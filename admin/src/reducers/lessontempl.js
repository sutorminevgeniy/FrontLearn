const lessonTempl = {
  structure: {
    lessonId: '',
    title: '',
    topic: '',
    author:'',
    preview_text: '',
    image: '',
    group: {
      ansver: '',
      question: '',
      others: ''
    },
    color: ''
  },
  levels: [
    {
      board: '',
      selector: '',
      ansver: '',
      defansver: '',
      before: '',
      after: '',
      instructions: {
        'en': '',
        'ru': ''
      }
    }
  ],
  levelWin: {
    instructions: {
      'en': '',
      'ru': '',
    },
    board: '',
    classes: '',
    ansver: '',
    before: '',
    after: ''
  }
};

export default lessonTempl;