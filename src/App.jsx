import React from 'react';
import ReactDom from 'react-dom';

import {levels, levelWin} from './levels';
import messages from './messages';

import './style.scss';
import './animate.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLevel: 0,
      currentLang: 'ru',
      levelsShow: false,
      langShow: false
    };

    this.nextLevel = this.nextLevel.bind(this);
    this.prevLevel = this.prevLevel.bind(this);
    this.toggleLevels = this.toggleLevels.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.toggleLang = this.toggleLang.bind(this);
    this.changeLang = this.changeLang.bind(this);  
  }

  // Уровни =========================================================================================
  // Следующий уровень
  nextLevel() {
    let nextLevel = this.state.currentLevel;

    if(nextLevel < (levels.length - 1)) {
      nextLevel++;
      this.setState({ currentLevel: nextLevel });
    }
  }

  // Предыдущий уровень
  prevLevel() {
    let prevLevel = this.state.currentLevel;

    if(prevLevel > 0) {
      prevLevel--;
      this.setState({ currentLevel: prevLevel });
    }
  }

  // Открытие закрытие окна с уровнями
  toggleLevels() {
    this.setState({ levelsShow: !this.state.levelsShow });
  }

  // Выбор уровня
  changeLevel(event) {
    let level = parseInt(event.target.dataset.level);

    this.setState({ currentLevel: level });
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
  getStrStyle (arrStyle) {
    let strStyle = JSON.stringify(arrStyle);

    strStyle = strStyle.replace(/[\{\}"]/g, '');
    strStyle = strStyle.replace(/:/g, ': ');
    strStyle = strStyle.replace(/,/g, '; ');

    return strStyle + ';';
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
    let lang = this.state.currentLang;
    const styleShow = {
      display: "block"
    };

    let questionStyle = this.getArrayStyle( dataLevel.before + dataLevel.after );
    let strStyleAnswer = this.getStrStyle( dataLevel.style );
    let ansverStyle = this.getArrayStyle( dataLevel.before + strStyleAnswer + dataLevel.after );

    return (
      <div>
        <section id="sidebar">
          <div>
            <div id="level-counter">
              <span className={ "arrow left" + (this.state.currentLevel == 0 ? " disabled" : "") } onClick={ this.prevLevel }>◀</span>
              <span id="level-indicator" onClick={ this.toggleLevels }>
                <span id="labelLevel" className="translate">{ messages.labelLevel[lang] } </span>
                <span className="current">{ this.state.currentLevel + 1 }</span>
                <span id="labelOf" className="translate"> { messages.labelOf[lang] } </span>
                <span className="total">{ levels.length } </span>
                <span className="caret">▾</span>
              </span>
              <span className={ "arrow right" + (this.state.currentLevel == levels.length - 1 ? " disabled" : "")} onClick={ this.nextLevel }>▶</span>
              <div id="levelsWrapper" className={ "tooltip" + (this.state.levelsShow ? "" : " hide") }>
                <div id="levels">
                  {
                    levels.map((item, i) => {
                      return (
                        <span 
                          key={ i } 
                          className={"level-marker" + ( i === this.state.currentLevel ? " solved current" : "")}
                          onClick={ this.changeLevel }
                          data-level={ i } >{ i + 1 }</span>
                      );
                    })
                  }
                </div>
                <div id="labelReset" className="translate" onClick={ this.toggleLevels }>{ messages.labelReset[lang] }</div>
              </div>
            </div>

            <h1>Flexbox Froggy</h1>
            <p id="instructions" dangerouslySetInnerHTML={{__html: dataLevel.instructions[lang]}}></p>
            <p id="docs"></p>
          </div>

          <div id="editor">
            <div id="css">
              <div className="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10</div>
              <pre id="before" dangerouslySetInnerHTML={{__html: dataLevel.before}}></pre>
              <textarea id="code"></textarea>
              <pre id="after" dangerouslySetInnerHTML={{__html: dataLevel.after}}></pre>
            </div>
            <button id="next" className="translate">{ messages.next[lang] }</button>
          </div>

          <div id="share">
            <p className="img-next">
              <a href="http://cssgridgarden.com"><img src="./images/next-gridgarden.png"/></a>
              <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy"><img src="./images/next-treehouse.png"/></a>
            </p>
            <p className="social">
              <span id="tweet">
                <a href="https://twitter.com/share" className="twitter-share-button" data-url="http://flexboxfroggy.com" data-via="playcodepip">Tweet</a>
                <a href="https://twitter.com/playcodepip" className="twitter-follow-button" data-show-count="false">Follow @playcodepip</a>
              </span>
              <span className="fb-like" data-href="http://flexboxfroggy.com" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></span>
            </p>
          </div>
          <div className="credits">
            <span id="labelFooter" className="translate">{ messages.labelFooter[lang] } </span>
            <a href="https://github.com/thomaspark/flexboxfroggy/">GitHub</a> • 
            <span id="language">
              <span id="languageActive" className="toggle translate" onClick={ this.toggleLang }>{ messages.languageActive[lang] }</span>
              <span className={ "tooltip" + (this.state.langShow ? "" : " hide") }>
                { Object.entries(messages.languageActive).map(item => {
                  return (
                    <a 
                      key={ item[0] } 
                      href={ "#" + item[0] } 
                      data-lang={ item[0] }
                      onClick={ this.changeLang } >{ item[1] }</a> 
                  );
                }) }
              </span>
            </span>
          </div>
          <div className="credits">
            <span id="gridGarden" className="translate">Want to learn CSS grid? Play</span> <a href="http://cssgridgarden.com">Grid Garden</a>.
          </div>
        </section>

        <section id="view">
          <div id="board">
            <div id="pond" style={ questionStyle[ '#pond' ] ? questionStyle[ '#pond' ] : '' }>
              { dataLevel.board.split('').map((item, index) => {
                let colorItem = this.getColor(item);

                return (
                  <div 
                    key={ index } 
                    className={ "frog " + colorItem }
                    style={ questionStyle[ '.' + colorItem ] ? questionStyle[ '.' + colorItem ] : {} } >
                      <div className="bg animated pulse infinite"></div>
                  </div>
                );
              }) }
            </div>
            <div id="background" style={ ansverStyle[ '#pond' ] ? ansverStyle[ '#pond' ] : {} }>
              { dataLevel.board.split('').map((item, index) => {
                let colorItem = this.getColor(item);

                return (
                  <div 
                    key={ index } 
                    className={ "lilypad " + colorItem }
                    style={ ansverStyle[ '.' + colorItem ] ? ansverStyle[ '.' + colorItem ] : {} } >
                      <div className="bg"></div>
                  </div>
                );
              }) }
            </div>
          </div>
        </section>
      </div>
    );      
  }  
}

ReactDom.render(<App />, document.getElementById('root'));