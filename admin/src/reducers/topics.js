import { GET_TOPICS } from '../actions';

const initState = {
  topics: [],
  lessons: []
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_TOPICS:
      return ({
        topics: action.topics,
        lessons: action.lessons,
      });

    default:
      return state;
  }
}