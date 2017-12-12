import React from 'react';

import LevelCounterContainer from '../container/LevelCounterContainer';
import InstructionsContainer from '../container/InstructionsContainer';
import EditorContainer       from '../container/EditorContainer';
import BoardContainer        from '../container/BoardContainer';

function Lesson (props) {
  let lang = props.state.lang;
  let level = props.state.level; 
  let levelData = ( 
    props.state.statusWin ? 
    props.state.lesson.levelWin : 
    props.state.lesson.levels[level] );

  return (
    <div className="page">
      <section id="sidebar">
        <div>
          <LevelCounterContainer />
          <InstructionsContainer content={levelData.instructions[lang]}/>
        </div>

        {!props.state.statusWin && <EditorContainer />}
      </section>

      <section id="view">
        <BoardContainer />
      </section>
    </div>
  );      
}

export default Lesson;