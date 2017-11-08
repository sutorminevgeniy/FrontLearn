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

    this.state = {
      currentLevel: 0,
      currentLang: 'ru',
      currentAnswer: '',
      correctAnswer: levels[0].style,
      disabledCheck: true,
      levelsShow: false,
      langShow: false 
    };

    this.nextLevel = this.nextLevel.bind(this);
    this.prevLevel = this.prevLevel.bind(this);
    this.toggleLevels = this.toggleLevels.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.toggleLang = this.toggleLang.bind(this);
    this.changeLang = this.changeLang.bind(this);
    this.inputAnswer = this.inputAnswer.bind(this);
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

    arrStyle = arrStyle.replace(/([\{\}])\s*([^\{\}:;"]*)\s+\{/g, '$1 "$2": {');
    arrStyle = arrStyle.replace(/([\{;])\s*([^\{\}:;"]*)\s*:/g, '$1 "$2": ');
    arrStyle = arrStyle.replace(/:\s*([^\{\}"]+)\s*;/g, ': "$1";');
    arrStyle = arrStyle.replace(/;/g, '');
    arrStyle = arrStyle.replace(/(["\}])(\s+["\{])/g, '$1,$2');

    return JSON.parse(arrStyle);
  }

  // Разбор массива стилей в строку
  getStrStyle(arrStyle) {
    let strStyle = JSON.stringify(arrStyle);

    strStyle = strStyle.replace(/[\{\}"]/g, '');
    strStyle = strStyle.replace(/:/g, ': ');
    strStyle = strStyle.replace(/,/g, '; ');

    return strStyle + ';';
  }

  // Ответы =========================================================================================
  // Ввод ответа
  inputAnswer(event) {
    let currentAnswer = event.target.value;
    let correctAnswer = this.getStrStyle(this.state.correctAnswer);
    let disabledCheck = true;

    if(this.clearStr(correctAnswer) === this.clearStr(currentAnswer)) {
      disabledCheck = false;
    }

    this.setState({
      currentAnswer: currentAnswer,
      disabledCheck: disabledCheck,
    });

    console.log(this.clearStr(correctAnswer), this.clearStr(currentAnswer));
  }

  // очистка строки от лишних пробельных символов
  clearStr(str) {
    let result = str;

    result = result.replace(/\s+/g, ' ');
    result = result.replace(/^\s*/, '');
    result = result.replace(/\s*$/, '');

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
    let dataLevel = levels[this.state.currentLevel];
    
    let questionStyle = this.getArrayStyle( dataLevel.before + dataLevel.after );
    let strStyleAnswer = this.getStrStyle( dataLevel.style );
    let ansverStyle = this.getArrayStyle( dataLevel.before + strStyleAnswer + dataLevel.after );

    return (
      <div>
        <section id="sidebar">
          <div>
            <LevelCounter
              currentLevel={ this.state.currentLevel }
              currentLang ={ this.state.currentLang }
              prevLevel   ={ this.prevLevel }
              nextLevel   ={ this.nextLevel }
              changeLevel ={ this.changeLevel }
              levelsShow  ={ this.state.levelsShow }
              toggleLevels={ this.toggleLevels } />
            
            <Instructions dataLevel={ dataLevel } currentLang ={ this.state.currentLang } />
          </div>

          <Editor
            dataLevel    ={ dataLevel }
            currentLang  ={ this.state.currentLang }
            inputAnswer  ={ this.inputAnswer }
            currentAnswer={ this.state.currentAnswer }
            disabledCheck={ this.state.disabledCheck }
            nextLevel    ={ this.nextLevel } />
          
          <Share />
          
          <Credits
            currentLang={ this.state.currentLang }
            langShow   ={ this.state.langShow }
            toggleLang ={ this.toggleLang }
            changeLang ={ this.changeLang } />
        </section>

        <section id="view">
          <div id="board">
            <Board
              style    ={ questionStyle }
              dataLevel={ dataLevel }
              getColor ={ this.getColor }
              id="pond"
              classFigurs="frog"
              classFigureBg="animated pulse infinite" />
            <Board
              style    ={ ansverStyle }
              dataLevel={ dataLevel }
              getColor ={ this.getColor }
              id="background"
              classFigurs="lilypad" />
          </div>
        </section>
      </div>
    );      
  }  
}

ReactDom.render(<App />, document.getElementById('root'));