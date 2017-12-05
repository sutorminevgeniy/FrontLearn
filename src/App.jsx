import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory'
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import './style.scss';
import './animate.scss';

import topics from './data/topics';
import {levels, levelWin} from './data/levels';

import reducer from './reducers';

import LessonContainer from './container/LessonContainer';
import Sidenav from './components/Sidenav';
import Credits      from './components/Credits';


import { initStateUser } from './actions';

import LevelCounterContainer from './container/LevelCounterContainer';
import InstructionsContainer from './container/InstructionsContainer';
import EditorContainer       from './container/EditorContainer';
import BoardContainer        from './container/BoardContainer';
import Share        from './components/Share';

// Создание выбранной вами истории для браузера
const history = createHistory();

// Создаем middleware для перехвата и отправки действий навигации
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer
  }),
  applyMiddleware(middleware)
)


class App extends React.Component {
  componentDidMount() {
      store.dispatch(initStateUser());
  }

  render() {
    return (
      <div className="page">
        <section id="sidebar">
          <div>
            <LevelCounterContainer />
            <InstructionsContainer />
          </div>

          <a href="/about">About</a>

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

function Topics(){
  return (
    <div className="topics">
      <Sidenav topics={topics} />

      <section id="view">
        <Share />
      </section>
    </div> 
  );
}

const Links = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/lessons'>Lesson</Link>
    <Link to='/lessons/xx/zzz'>Contact</Link>
  </nav>
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Links />

        <Route exact path='/'  component={Topics}/>
        <Route path='/about' render={() => <h1>About</h1>}/>
        <Route exact path='/lessons/:topic?' component={Topics}/>
        <Route path='/lessons/:topic/:subpage' component={LessonContainer}/>

        <Credits />
      </div>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root'));
