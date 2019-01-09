import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import main from './main';
import lesson from './lesson';
import topics from './topics';
import user from './user';

export default (history) => combineReducers({
  main,
  lesson,
  topics,
  user,
  router: connectRouter(history)
});