import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory'
import { Route, Link, Switch } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';



import './style.scss';
import './animate.scss';

import {levels, levelWin} from './data/levels';

import reducer from './reducers';
import { initStateUser } from './actions';

import LevelCounterContainer from './container/LevelCounterContainer';
import InstructionsContainer from './container/InstructionsContainer';
import EditorContainer       from './container/EditorContainer';
import BoardContainer        from './container/BoardContainer';
import Share        from './components/Share';
import Credits      from './components/Credits';

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

const Links = () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/lesson'>Lesson</Link>
    <Link to='/lesson/xx/zzz'>Contact</Link>
  </nav>
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Links />

        <Route exact path='/' render={() => <h1>Home</h1>}/>
        <Route path='/about' render={() => <h1>About</h1>}/>
        <Route path='/lesson/:page?/:subpage?' component={App}/>
      </div>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root'));
