import React from 'react';

import LevelCounterContainer from '../container/LevelCounterContainer';
import InstructionsContainer from '../container/InstructionsContainer';
import EditorContainer       from '../container/EditorContainer';
import BoardOtherContainer   from '../container/BoardOtherContainer';
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
        <div id="board">
        
          

          <BoardContainer
            levelData = { levelData }
            styleFigurs  ={ props.state.statusWin ? "ansverStyle" : "questionStyle"}
            id           ="pond"
            classFigurs  ="frog"
            classFigureBg="animated pulse infinite" />
          <BoardContainer
            levelData = { levelData }
            styleFigurs="ansverStyle"
            id         ="background"
            classFigurs="lilypad" />

          { 'others' in props.state.lesson.structure.group && 
            props.state.lesson.structure.group.others.map((content, index) => <BoardOtherContainer
              levelData = { levelData } 
              type="others"  
              content={content} 
              key={index} />) }

          { 'ansver' in props.state.lesson.structure.group && 
            props.state.lesson.structure.group.ansver.
            map((content, index) => <BoardOtherContainer
              levelData = { levelData } 
              type="ansver"  
              content={content} 
              key={index} />) 
          }

          { 'question' in props.state.lesson.structure.group && 
            props.state.lesson.structure.group.question.
            map((content, index) => <BoardOtherContainer
              levelData = { levelData } 
              type="question"  
              content={content} 
              key={index} />) 
          }

        </div>
      </section>
    </div>
  );      
}

export default Lesson;