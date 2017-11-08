import React from 'react';

import {levels, levelWin} from '../levels';
import messages from '../messages';

function LevelCounter(props) {
  let lang = props.currentLang;

  return (
    <div id="level-counter">
      <span className={ "arrow left" + (props.currentLevel == 0 ? " disabled" : "") } onClick={ props.prevLevel }>◀</span>
      <span id="level-indicator" onClick={ props.toggleLevels }>
        <span id="labelLevel" className="translate">{ messages.labelLevel[lang] } </span>
        <span className="current">{ props.currentLevel + 1 }</span>
        <span id="labelOf" className="translate"> { messages.labelOf[lang] } </span>
        <span className="total">{ levels.length } </span>
        <span className="caret">▾</span>
      </span>
      <span className={ "arrow right" + (props.currentLevel == levels.length - 1 ? " disabled" : "")} onClick={ props.nextLevel }>▶</span>
      <div id="levelsWrapper" className={ "tooltip" + (props.levelsShow ? "" : " hide") }>
        <div id="levels">
          {
            levels.map((item, i) => {
              return (
                <span 
                  key={ i } 
                  className={"level-marker" + ( i === props.currentLevel ? " solved current" : "")}
                  onClick={ props.changeLevel }
                  data-level={ i } >{ i + 1 }</span>
              );
            })
          }
        </div>
        <div id="labelReset" className="translate" onClick={ props.toggleLevels }>{ messages.labelReset[lang] }</div>
      </div>
    </div>
  );
}

export default LevelCounter;