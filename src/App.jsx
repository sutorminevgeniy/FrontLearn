import React from 'react';
import ReactDom from 'react-dom';

import {levels, levelWin} from './levels';
import messages from './messages';

import './style.scss'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLevel: 0,
      currentLang: 'ru',
      levelsShow: false
    };

    this.nextLevel = this.nextLevel.bind(this);
    this.prevLevel = this.prevLevel.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
    this.toggleLevels = this.toggleLevels.bind(this);  
  }

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

  // Выбор уровня
  changeLevel(e) {
    let level = parseInt(e.target.dataset.level);

    this.setState({ currentLevel: level });
  }

  // Открытие закрытие окна с уровнями
  toggleLevels() {
    this.setState({ levelsShow: !this.state.levelsShow });
  }

  // Проверка перед обнавлением состояния или свойств
  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.levelsShow) {
      nextState.levelsShow = false;
    }

    return true;
  }

  render() {
    let dataLevel = levels[this.state.currentLevel];
    let lang = this.state.currentLang;
    const styleShow = {
      display: "block"
    };

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
              <div id="levelsWrapper" className="tooltip" style={ this.state.levelsShow ? styleShow : {} }>
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
              <span id="languageActive" className="toggle translate">{ messages.languageActive[lang] }</span>
              <span className="tooltip">
                { Object.entries(messages.languageActive).map(item => {
                  return (
                    <a href={ "#" + item[0] } key={ item[0] }>{ item[1] }</a>
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
            <div id="pond">
            </div>
            <div id="background">
            </div>
          </div>
        </section>
      </div>
    );      
  }  
}

ReactDom.render(<App />, document.getElementById('root'));