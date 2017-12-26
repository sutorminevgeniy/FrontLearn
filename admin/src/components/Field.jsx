import React from 'react';

import FieldContainer from '../container/FieldContainer';

class Field extends React.Component {
  constructor(props) {
    super(props);

    this.inputAnswer = this.inputAnswer.bind(this);
  }

  inputAnswer(event) {
    let answer = event.target.value;
    this.props.inputAnswer(answer)
  }

  getItem(path) {
    let pathArr = path.split('.');

    let result = { val: this.props.lesson.lesson, key: '' };

    result = pathArr.reduce((res, key) => ({ val: res.val[key], key }) , result);
 
    return result;
  }

  render() {
    let pathItem = this.getItem(this.props.path);
 
    if(typeof pathItem.val === 'object') {
      let pathItemArr = [];

      for(let key in pathItem.val) {
        pathItemArr.push( <FieldContainer  key={key} path={this.props.path + '.' + key}/> );
      }

      return (
        <fieldset className="groupLesson">
          <legend>{pathItem.key}</legend>
          { pathItemArr }
        </fieldset>
      );

    } else {
      return (
        <div className="fildLesson">
          <label htmlFor={this.props.path}>{pathItem.key}</label>
          <textarea id={this.props.path} value={ pathItem.val } />
        </div>
      );      
    }
  }
}

export default Field;
