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

  if('othersText' in props.state.lesson.structure.group && 
  props.state.lesson.structure.group.othersText){
    getBoard(props.state.lesson.structure.group.othersText);
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

function getBoard(strBoard) {
  let arrBoard = strBoard;

  arrBoard = arrBoard.split('>');

  arrBoard = arrBoard.map(item => {
    let result = {};
    let itemParam = item.split('|');
    itemParam.forEach(element => {
      console.log(element[0]);
      switch (element[0]) {
        case '#':
          result.id = element.slice(1);
          break;

        case '.':
          result.className = element.split('.').slice(1);
          break;

        case ',':
          result.className = element.slice(1);
          break;

        case '$':
          result.color = true;
          break;

        case '*':
          result.count = parseInt(element.slice(1), 10);
          break;

        case '&':
          result.changedSyles = element.slice(1);
          break;
      
        default:
          result.tag = element;
          break;
      }
    });
    return result;
  })
  console.log(arrBoard);

  return arrBoard;
}