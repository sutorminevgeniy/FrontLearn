import React from 'react';
import FieldContainer from '../container/FieldContainer';

function Structure(props) {
  return (
    <div>
      <h1>{ props.lesson.lesson.title }</h1>

      <FieldContainer  path="title"/>

      <p id="docs"></p>
    </div>
  );
}

export default Structure;