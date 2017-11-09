import React from 'react';
import ReactDom from 'react-dom';

import {levels, levelWin} from './levels';
import messages from './messages';

import './style.scss';
import './animate.scss';

import LevelCounter from './components/LevelCounter';
import Instructions from './components/Instructions';
import Editor       from './components/Editor';
import Share        from './components/Share';
import Credits      from './components/Credits';
import Board        from './components/Board';

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
      levelsShow: false,
      currentLang: 'ru',
      langShow: false,
      stateUser: stateUser,
      correctAnswer: levels[0].style 
    };
  }

  // Уровни =========================================================================================
  // Следующий уровень
  nextLevel() {
    let nextLevel = this.state.currentLevel;

    if(nextLevel < (levels.length - 1)) {
      nextLevel++;
      this.setState({
        currentLevel: nextLevel,
        currentAnswer: '',
        correctAnswer: levels[nextLevel].style,
        disabledCheck: true
      });
    }
  }

  // Предыдущий уровень
  prevLevel() {
    let prevLevel = this.state.currentLevel;

    if(prevLevel > 0) {
      prevLevel--;
      this.setState({
        currentLevel: prevLevel,
        currentAnswer: '',
        correctAnswer: levels[prevLevel].style,
      });
    }
  }

  // Открытие закрытие окна с уровнями
  toggleLevels() {
    this.setState({ levelsShow: !this.state.levelsShow });
  }

  // Выбор уровня
  changeLevel(event) {
    let level = parseInt(event.target.dataset.level);

    this.setState({
      currentLevel: level,
      currentAnswer: '',
      correctAnswer: levels[level].style,
    });
  }

  // Языки ==========================================================================================
  // Открытие закрытие окна с языками
  toggleLang() {
    this.setState({ langShow: !this.state.langShow });
  }

  // Выбор уровня
  changeLang(event) {
    event.preventDefault();
    let lang = event.target.dataset.lang;

    this.setState({ currentLang: lang });
  }

  // Фигуры =========================================================================================
  // Получение цвета
  getColor(color) {
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
      default:
        return '';
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
  // Проверка перед обнавлением состояния или свойств
  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.levelsShow) {
      nextState.levelsShow = false;
    }

    if(this.state.langShow) {
      nextState.langShow = false;
    }

    return true;
  }

  render() {
    let currentLevel = this.state.currentLevel;
    let dataLevel = levels[currentLevel];

    return (
      <div>
        <section id="sidebar">
          <div>
            <LevelCounter
              currentLevel={ currentLevel }
              currentLang ={ this.state.currentLang }
              levelsShow  ={ this.state.levelsShow }
              prevLevel   ={ () => this.prevLevel() }
              nextLevel   ={ () => this.nextLevel() }
              toggleLevels={ () => this.toggleLevels() }
              changeLevel ={ (event) => this.changeLevel(event) } />
            
            <Instructions dataLevel={ dataLevel } currentLang ={ this.state.currentLang } />
          </div>

          <Editor
            dataLevel    ={ dataLevel }
            currentLang  ={ this.state.currentLang }
            currentAnswer={ this.state.stateUser[currentLevel].answer }
            passed       ={ this.state.stateUser[currentLevel].passed }
            nextLevel    ={ () => this.nextLevel() }
            inputAnswer  ={ (event) => this.inputAnswer(event) } />
          
          <Share />
          
          <Credits
            currentLang={ this.state.currentLang }
            langShow   ={ this.state.langShow }
            toggleLang ={ () => this.toggleLang() }
            changeLang ={ (event) => this.changeLang(event) } />
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

ReactDom.render(<App />, document.getElementById('root'));