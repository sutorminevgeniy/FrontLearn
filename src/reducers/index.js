import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import lesson from './lesson';

const reducer = combineReducers({
  lesson,
  routing: routerReducer
});

export default reducer;