import { GET_TOPICS, GET_LESSON, DELETE_LESSON } from '../actions';

const initState = {
  topics: [],
  lessons: []
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_TOPICS:
      return Object.assign({}, state, {
        topics: action.topics,
        lessons: action.lessons,
      });

    case GET_LESSON:
      return Object.assign({}, state, {
        topics: action.topics
      });

    case DELETE_LESSON:
      return deleteLesson(state, action.id);

    default:
      return state;
  }
}

function deleteLesson(state, id) {
  let resState = Object.assign({}, state);

  let index = resState.lessons.findIndex(item => item.lessonId === id);

  if(index > -1) {
    resState.lessons = resState.lessons.slice();
    resState.lessons.splice(index, 1);
  }

  return resState;
}