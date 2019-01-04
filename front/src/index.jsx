import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ConnectedRouter } from 'connected-react-router'

import { history, store } from './store';
import { getMain } from './actions';

import App from './App.jsx';

import './style.scss';
import './animate.scss';

store.dispatch(getMain());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'));
