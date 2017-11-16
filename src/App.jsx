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
import Editor       from './components/Editor';
import Board        from './components/Board';
import Share        from './components/Share';
import Credits      from './components/Credits';

const initialState = {
  level: 0,
  lang: 'ru',
  stateUser: [],
  correctAnswer: levels[0].style 
};

const store = createStore(reducer, initialState);

class App extends React.Component {
  constructor(props) {
    super(props);

    let stateUser = Array(levels.length).fill(null).map((item, i) => {
      let questionStyle = this.getArrayStyle( levels[i].before + levels[i].after );
      let strStyleAnswer = this.getStrStyle( levels[i].style );
      let ansverStyle = this.getArrayStyle( levels[i].before + strStyleAnswer + levels[i].after );

      return {
        passed: false,
        answer: '',
        ansverStyle,
        questionStyle
      };
    });

    this.state = {
      currentLevel: 0,
      currentLang: 'ru',
      stateUser: stateUser,
      correctAnswer: levels[0].style 
    };
  }

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

  // Разбор строки стилей в массив
  getArrayStyle (strStyle) {
    let arrStyle = '{' + strStyle + '}';

    arrStyle = arrStyle.replace(/([\{\}])\s*([^\{\}:;"]*)\s+\{/g, '$1 "$2": {')
                       .replace(/([\{;])\s*([^\{\}:;"]*)\s*:/g, '$1 "$2": ')
                       .replace(/:\s*([^\{\}"]+)\s*;/g, ': "$1";')              // добавление кавычек
                       .replace(/;/g, '')                                       // удаление всех ;
                       .replace(/(["\}])(\s+["\{])/g, '$1,$2');
    // преобразование в верблюжью нотацию
    arrStyle = arrStyle.replace(/-(\w)(\w*":)/g, (match, p1, p2) => p1.toUpperCase() + p2); 

    return JSON.parse(arrStyle);
  }

  // Разбор массива стилей в строку
  getStrStyle(arrStyle) {
    let strStyle = JSON.stringify(arrStyle);

    strStyle = strStyle.replace(/[\{\}"]/g, '')
                       .replace(/:/g, ': ')
                       .replace(/,/g, '; ');

    return strStyle + ';';
  }

  // Ответы =========================================================================================
  // Ввод ответа
  inputAnswer(event) {
    let stateUser = this.state.stateUser.slice();
    let currentAnswer = event.target.value;
    let correctAnswer = this.getStrStyle(this.state.correctAnswer);

    stateUser[this.state.currentLevel].answer = currentAnswer;
    stateUser[this.state.currentLevel].passed = false;

    try {
      stateUser[this.state.currentLevel].questionStyle = this.getArrayStyle( levels[this.state.currentLevel].before + this.clearStr(currentAnswer) + levels[this.state.currentLevel].after );
    } catch (err) {
      console.log('Стиль не корректен для конвертации: ', currentAnswer);
    }

    if(this.clearStr(correctAnswer) === this.clearStr(currentAnswer)) {
      stateUser[this.state.currentLevel].passed = true;
    }

    this.setState({
      stateUser: stateUser
    });
    console.log('Верный ответ: ',correctAnswer);
  }

  // очистка строки от лишних пробельных символов
  clearStr(str) {
    let result = str;

    result = result.replace(/\n/g, '; ')          // замена перевода строк на  ;
                   .replace(/[\s;]+;/g, ';')      // очистка дублируемых ;;
                   .replace(/\s+/g, ' ')          // очисика лишних побелов
                   .replace(/(^\s*)|(\s*$)/g, '') // удаление пробелов в начале/конце
                   .replace(/([^;])$/, '$1;');    // добавление ; в конце

    return result;
  }

  // Построение =====================================================================================
  render() {
    let currentLevel = this.state.currentLevel;
    let dataLevel = levels[currentLevel];

    return (
      <div>
        <section id="sidebar">
          <div>
            <LevelCounterContainer />
            <InstructionsContainer />
          </div>

          <Editor
            dataLevel    ={ dataLevel }
            currentLang  ={ this.state.currentLang }
            currentAnswer={ this.state.stateUser[currentLevel].answer }
            passed       ={ this.state.stateUser[currentLevel].passed }
            nextLevel    ={ () => this.nextLevel() }
            inputAnswer  ={ (event) => this.inputAnswer(event) } />
          
          <Share />
          
          <Credits />
        </section>

        <section id="view">
          <div id="board">
            <Board
              style    ={ this.state.stateUser[currentLevel].questionStyle }
              dataLevel={ dataLevel }
              getColor ={ (arg) => this.getColor(arg) }
              id="pond"
              classFigurs="frog"
              classFigureBg="animated pulse infinite" />
            <Board
              style    ={ this.state.stateUser[currentLevel].ansverStyle }
              dataLevel={ dataLevel }
              getColor ={ (arg) => this.getColor(arg) }
              id="background"
              classFigurs="lilypad" />
          </div>
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