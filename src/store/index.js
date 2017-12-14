import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import lesson from '../reducers';


// Создание выбранной вами истории для браузера
export const history = createHistory();

// Создаем middleware для перехвата и отправки действий навигации
const middleware = routerMiddleware(history);

export const store = createStore(
  combineReducers({
    lesson,
    routing: routerReducer
  }),
  applyMiddleware(middleware)
)