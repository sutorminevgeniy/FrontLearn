import React from 'react';

import BoardItemContainer   from '../container/BoardItemContainer';

function Board(props) {
  let level = props.state.level;
  let levelData = ( 
    props.state.statusWin ? 
    props.state.lesson.levelWin : 
    props.state.lesson.levels[level] );
  
  return (
    <div id="board">
          { 'others' in props.state.lesson.structure.group && 
            props.state.lesson.structure.group.others
              .map((content, index) => <BoardItemContainer
                levelData = { levelData } 
                type="others"  
                content={content} 
                key={index} />)
          }

          { 'ansver' in props.state.lesson.structure.group && 
            props.state.lesson.structure.group.ansver
              .map((content, index) => <BoardItemContainer
                levelData = { levelData } 
                type="ansver"  
                content={content} 
                key={index} />) 
          }

          { 'question' in props.state.lesson.structure.group && 
            props.state.lesson.structure.group.question
              .map((content, index) => <BoardItemContainer
                levelData = { levelData } 
                type="question"  
                content={content} 
                key={index} />) 
          }

        </div>
  );
}

export default Board;
