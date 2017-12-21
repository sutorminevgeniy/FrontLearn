import { GET_MAIN,
         CHANGE_LANG } from '../actions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case GET_MAIN:
      return action.main;

    case CHANGE_LANG:
      return Object.assign({}, state, {
        lang: action.lang
      });

    default:
      return state;
  }
}