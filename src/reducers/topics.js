import { GET_TOPICS } from '../actions';

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_TOPICS:
      return action.topics;

    default:
      return state;
  }
}