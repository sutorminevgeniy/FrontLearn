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
      currentLang: 'ru'
    }
  }

  render() {
    let currentLevel = levels[this.state.currentLevel];
    return (
      <div>
        <section id="sidebar">
          <div>
            <div id="level-counter">
              <span className="arrow left">◀</span>
              <span id="level-indicator">
                <span id="labelLevel" className="translate">Level </span>
                <span className="current">{ this.state.currentLevel + 1 }</span>
                <span id="labelOf" className="translate"> of </span>
                <span className="total">{ levels.length } </span>
                <span className="caret">▾</span>
              </span>
              <span className="arrow right">▶</span>
              <div id="levelsWrapper" className="tooltip">
                <div id="levels"></div>
                <div id="labelReset" className="translate">Reset</div>
              </div>
            </div>
            <h1>Flexbox Froggy</h1>
            <p id="instructions" dangerouslySetInnerHTML={{__html: currentLevel.instructions[this.state.currentLang]}}></p>
            <p id="docs"></p>
          </div>
          <div id="editor">
            <div id="css">
              <div className="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10</div>
              <pre id="before" dangerouslySetInnerHTML={{__html: currentLevel.before}}></pre>
              <textarea id="code"></textarea>
              <pre id="after" dangerouslySetInnerHTML={{__html: currentLevel.after}}></pre>
            </div>
            <button id="next" className="translate">Next</button>
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
            <span id="labelFooter" className="translate">Flexbox Froggy is created by</span>
            <a href="https://codepip.com">Codepip</a> •
            <a href="https://github.com/thomaspark/flexboxfroggy/">GitHub</a> •
            <a href="https://twitter.com/playcodepip">Twitter</a> •
            <span id="language">
              <span id="languageActive" className="toggle translate">{ this.state.currentLang }English</span>
              <span className="tooltip">
                <a href="#en">English</a>
                <a href="#es">Español</a>
                <a href="#fr">Français</a>
                <a href="#de">Deutsch</a>
                <a href="#nl">Nederlands</a>
                <a href="#pt-br">Português</a>
                <a href="#it">Italiano</a>
                <a href="#sv">Svenska</a>
                <a href="#pl">Polski</a>
                <a href="#cs">Česky</a>
                <a href="#hu">Magyar</a>
                <a href="#ro">Română</a>
                <a href="#bg">Български</a>
                <a href="#lt">Lietuvių</a>
                <a href="#uk">Українська</a>
                <a href="#ru">Русский</a>
                <a href="#sr">Српски</a>
                <a href="#tr">Türkçe</a>
                <a href="#fa">فارسی</a>
                <a href="#hi">हिंदी</a>
                <a href="#ta">தமிழ்</a>
                <a href="#ml">മലയാളം</a>
                <a href="#zh-cn">简体中文</a>
                <a href="#zh-tw">繁體中文</a>
                <a href="#ja">日本語</a>
                <a href="#ko">한국어</a>
                <a href="#vi">Tiếng Việt</a>
                <a href="#eo">Esperanto</a>
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