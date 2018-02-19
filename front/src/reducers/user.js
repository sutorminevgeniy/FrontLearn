import { GET_USER, EXIT_USER } from '../actions';

function reducer(state = null, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;

    case EXIT_USER:
      return null;

    default:
      return state;
  }
}

export default reducer;