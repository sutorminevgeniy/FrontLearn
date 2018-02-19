import React from 'react';

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

  getCountStr(str, substr){
    let countStr = 0;
    let pos = 0;
    while (true) {
      let foundPos = str.indexOf(substr, pos);
      if (foundPos === -1) break;

      countStr++;
      pos = foundPos + 1;
    }
    return countStr;
  }

  render() {
    const dataLevel = this.props.state.lesson.levels[this.props.state.level];

    let styleTextarea = { 
      height: 22 * (this.getCountStr(dataLevel.ansver, '\n') + 2) + 4 + 'px'
    };

    let countLine = this.getCountStr(dataLevel.ansver + dataLevel.before + dataLevel.after, '\n') + 5;
    console.log(dataLevel, countLine);
    return (
      <div id="editor">
        <div id="css">
          <div className="line-numbers">
            { Array(countLine).fill(null)
              .map((item, i) => <div key={i}>{i+1}<br/></div>) }
          </div>
          <div className="editCont">
            <pre id="before" dangerouslySetInnerHTML={{__html: dataLevel.before}}></pre>
            <textarea 
              id="code" 
              onChange={ this.inputAnswer } 
              style={ styleTextarea } 
              value={ this.props.state.stateUser[this.props.state.level].answer }></textarea>
            <pre id="after" dangerouslySetInnerHTML={{__html: dataLevel.after}}></pre>
          </div>
        </div>

        <button 
          id="next" 
          className={ "translate" + (this.props.state.stateUser[this.props.state.level].passed ? '' : ' disabled') }
          onClick={ () => (this.props.state.stateUser[this.props.state.level].passed ? this.props.nextButton() : '') }>{ this.props.main.messages.next[this.props.main.lang] }</button>
      </div>
    );
  }
}

export default Editor;