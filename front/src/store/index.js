import createHistory from 'history/createBrowserHistory';

import { createStore, applyMiddleware } from 'redux';

import { routerMiddleware } from 'connected-react-router'
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducer from '../reducers';


// Создание выбранной вами истории для браузера
export const history = createHistory();

// Создаем middleware для перехвата и отправки действий навигации
const middleware = routerMiddleware(history);

export const store = createStore(
  reducer(history),
  applyMiddleware(middleware, promise, thunk)
)