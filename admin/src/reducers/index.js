import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import main from './main';
import lesson from './lesson';
import topics from './topics';

const reducer = combineReducers({
  main,
  lesson,
  topics,
  routing: routerReducer
});

export default reducer;