import './style.scss';
import './animate.scss';

import {levels, levelWin} from './levels';
import messages from './messages';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import { nextLevel, prevLevel, changeLevel, initStateUser } from './actions';

import LevelCounterContainer from './container/LevelCounterContainer';
import InstructionsContainer from './container/InstructionsContainer';
import EditorContainer       from './container/EditorContainer';
import Board        from './components/Board';
import Share        from './components/Share';
import Credits      from './components/Credits';

let stateUser = Array(levels.length).fill(null).map((item, i) => {
  return {
    passed: false,
    answer: '',
    ansverStyle: '',
    questionStyle: ''
  };
});

const initialState = {
  level: 0,
  lang: 'ru',
  stateUser: stateUser
};

const store = createStore(reducer, initialState);

class App extends React.Component {
  componentDidMount() {
      store.dispatch(initStateUser());
  }

  // Фигуры =========================================================================================
  // Получение цвета
  getColor(color = '') {
    switch (color) {
      case 'g':
        return 'green';
        break;
      case 'y':
        return 'yellow';
        break;
      case 'r':
        return 'red';
        break;
    }
  }

  // Построение =====================================================================================
  render() {

    let currentLevel = '0';
    let dataLevel = levels[currentLevel];

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

        </section>
      </div>
    );      
  }  
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));


          // <div id="board">
          //   <Board
          //     style    ={ store.getState().stateUser[currentLevel].questionStyle }
          //     dataLevel={ dataLevel }
          //     getColor ={ (arg) => this.getColor(arg) }
          //     id="pond"
          //     classFigurs="frog"
          //     classFigureBg="animated pulse infinite" />
          //   <Board
          //     style    ={ store.getState().stateUser[currentLevel].ansverStyle }
          //     dataLevel={ dataLevel }
          //     getColor ={ (arg) => this.getColor(arg) }
          //     id="background"
          //     classFigurs="lilypad" />
          // </div>