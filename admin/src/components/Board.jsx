import React from 'react';

import BoardItemContainer   from '../container/BoardItemContainer';

function Board(props) {
  let level = props.state.level;
  let levelData = ( 
    (props.state.statusWin || props.level === "levelWin") ? 
    props.state.lesson.levelWin : 
    props.state.lesson.levels[level] );

  if(props.state.lesson.structure.topic === 'html'){
    let htmlData = ( 
      (props.state.statusWin || props.level === "levelWin") ? 
      props.state.lesson.levelWin.ansver : 
      props.state.stateUser[props.state.level].answer );

    return (
      <div id="board">
        <div id="backgroundHTML" className="htmlBoard" dangerouslySetInnerHTML={{__html: htmlData}}></div>  
      </div>
    );
  }

  if('ansverText' in props.state.lesson.structure.group && 
  props.state.lesson.structure.group.ansverText){
    let ansver = props.state.lesson.structure.group.ansverText;

    ansver = ansver.split('>');

    ansver = ansver.map(item => item.split('|'))
    console.log(ansver);
  }
  
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
