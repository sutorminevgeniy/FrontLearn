import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import lesson from './lesson';
import topics from './topics';

const reducer = combineReducers({
  lesson,
  topics,
  routing: routerReducer
});

export default reducer;