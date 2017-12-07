import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import lesson from './reducers';
import App from './App';

import './style.scss';
import './animate.scss';

// Создание выбранной вами истории для браузера
const history = createHistory();

// Создаем middleware для перехвата и отправки действий навигации
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    lesson,
    routing: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'));