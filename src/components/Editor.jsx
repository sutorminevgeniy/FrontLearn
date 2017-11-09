import React from 'react';

import messages from '../messages';

function Editor(props) {
  let styleTextarea = {};
  styleTextarea.height = (20 * Object.entries(props.dataLevel.style).length + 4) + 'px';

  return (
    <div id="editor">
      <div id="css">
        <div className="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10</div>
        <pre id="before" dangerouslySetInnerHTML={{__html: props.dataLevel.before}}></pre>
        <textarea 
          id="code" 
          onChange={ props.inputAnswer } 
          style={ styleTextarea } 
          value={ props.currentAnswer }></textarea>
        <pre id="after" dangerouslySetInnerHTML={{__html: props.dataLevel.after}}></pre>
      </div>
      <button 
        id="next" 
        className={ "translate" + (props.passed ? '' : ' disabled') }
        onClick={ () => (props.passed ? props.nextLevel() : '') }>{ messages.next[props.currentLang] }</button>
    </div>
  );
}

export default Editor;