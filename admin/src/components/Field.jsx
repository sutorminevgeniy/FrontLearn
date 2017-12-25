import React from 'react';

class Field extends React.Component {
  constructor(props) {
    super(props);

    this.inputAnswer = this.inputAnswer.bind(this);
  }

  inputAnswer(event) {
    let answer = event.target.value;
    this.props.inputAnswer(answer)
  }

  render() {
    return (
      <div className="fildLesson">
        <label htmlFor={this.props.path}>{this.props.path}</label>
        <textarea id={this.props.path} defaultValue={ this.props.lesson.lesson[this.props.path] } />
      </div>
    );
  }
}

export default Field;