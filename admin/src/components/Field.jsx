import React from 'react';

import confLesson from '../confLesson';

import FieldContainer from '../container/FieldContainer';

class Field extends React.Component {
  constructor(props) {
    super(props);

    this.setValue = this.setValue.bind(this);
  }

  setValue(event) {
    let value = event.target.value;
    this.props.setValue(this.props.path, value)
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
      let labelText = pathItem.key;
      let message = '';
      let classField = 'fildLesson';

      if(confLesson[this.props.path] && confLesson[this.props.path].req){
        labelText += ' *';
      }

      if(this.props.lesson.incorrField[this.props.path]){
        message = this.props.lesson.incorrField[this.props.path];
        classField += ' warning'
      }

      return (
        <div className={classField}>
          <label htmlFor={this.props.path}>{labelText}</label>
          { this.props.path === 'structure.topic' ? (
            <select id={ this.props.path } value={pathItem.val} onChange={ this.setValue }>
              { pathItem.val === '' && <option value=""  style={{display: 'none'}}></option> }
              { this.props.topics.topics.map(item => (<option key={item.path} value={item.path}>{item.title}</option>)) }
            </select>)
            : 
          (<textarea 
                      id={ this.props.path } 
                      value={ pathItem.val }
                      onChange={ this.setValue } />)}
            <span>{message}</span>
        </div>
      );      
    }
  }
}

export default Field;
