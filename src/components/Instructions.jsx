import React from 'react';

function Instructions(props) {
  let lang = props.lesson.lang;
  let level = props.lesson.level; 
  let levelData = ( 
    props.lesson.statusWin ? 
    props.lesson.lesson.levelWin : 
    props.lesson.lesson.levels[level] );


  return (
    <div>
      <h1>{ props.lesson.lesson.title }</h1>
      <p id="instructions" dangerouslySetInnerHTML={{__html: levelData.instructions[lang]}}></p>
      <p id="docs"></p>
    </div>
  );
}

export default Instructions;