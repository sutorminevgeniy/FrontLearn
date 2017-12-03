import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory'

import './style.scss';
import './animate.scss';

import {levels, levelWin} from './levels';

import reducer from './reducers';
import { initStateUser } from './actions';

import LevelCounterContainer from './container/LevelCounterContainer';
import InstructionsContainer from './container/InstructionsContainer';
import EditorContainer       from './container/EditorContainer';
import BoardContainer        from './container/BoardContainer';
import Share        from './components/Share';
import Credits      from './components/Credits';

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store 
// const history = syncHistoryWithStore(browserHistory, store)
const history = createHistory()

class App extends React.Component {
  componentDidMount() {
      store.dispatch(initStateUser());
  }

  render() {
    return (
      <div>
        <section id="sidebar">
          <div>
            <LevelCounterContainer />
            <InstructionsContainer />
          </div>

          <EditorContainer />
          
          <Share />
          
          <Credits />
        </section>

        <section id="view">
          <div id="board">
            <BoardContainer
              styleFigurs  ="questionStyle"
              id           ="pond"
              classFigurs  ="frog"
              classFigureBg="animated pulse infinite" />
            <BoardContainer
              styleFigurs="ansverStyle"
              id         ="background"
              classFigurs="lilypad" />
          </div>
        </section>
      </div>
    );      
  }  
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>, 
  document.getElementById('root'));




