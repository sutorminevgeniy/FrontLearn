import { GET_MAIN } from '../actions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case GET_MAIN:
      return ({
        main: action.main,
      });

    default:
      return state;
  }
}