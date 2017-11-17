import {levels, levelWin} from '../levels';

import React from 'react';

import messages from '../messages';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      levelsShow: false,
    };

    this.inputAnswer = this.inputAnswer.bind(this);
  }

  inputAnswer(event) {
    let answer = event.target.value;
    this.props.inputAnswer(answer)
  }

  render() {
    const dataLevel = levels[this.props.state.level];

    let styleTextarea = { height: ((20 * Object.entries(dataLevel.style).length + 4) + 'px') };

    return (
      <div id="editor">
        <div id="css">
          <div className="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10</div>

          <pre id="before" dangerouslySetInnerHTML={{__html: dataLevel.before}}></pre>
            <textarea 
              id="code" 
              onChange={ this.inputAnswer } 
              style={ styleTextarea } 
              value={ this.props.state.stateUser[this.props.state.level].answer }></textarea>
          <pre id="after" dangerouslySetInnerHTML={{__html: dataLevel.after}}></pre>
        </div>

        <button 
          id="next" 
          className={ "translate" + (this.props.state.stateUser[this.props.state.level].passed ? '' : ' disabled') }
          onClick={ () => (this.props.state.stateUser[this.props.state.level].passed ? this.props.nextLevel() : '') }>{ messages.next[this.props.state.lang] }</button>
      </div>
    );
  }
}

export default Editor;