import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import main from './main';
import lesson from './lesson';
import topics from './topics';
import user from './user';

const reducer = combineReducers({
  main,
  lesson,
  topics,
  user,
  routing: routerReducer
});

export default reducer;