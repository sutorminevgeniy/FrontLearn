import React from 'react';

function Instructions(props) {
  let lang = props.main.lang;
  let level = props.lesson.level; 
  let levelData = ( 
    props.lesson.statusWin ? 
    props.lesson.lesson.levelWin : 
    props.lesson.lesson.levels[level] );


  return (
    <div>
      <h1>{ props.lesson.lesson.title }</h1>
      <label htmlFor="instructions">instructions</label><br />
      <textarea id="instructions" defaultValue={ levelData.instructions[lang] } />
      <p id="docs"></p>
    </div>
  );
}

export default Instructions;