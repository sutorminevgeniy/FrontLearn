import React from 'react';

import BoardItemContainer   from '../container/BoardItemContainer';

function BoardItem(props) {
  let id         = props.content[0].id || '';
  let className  = props.content[0].className || [];
  className  = className.join(' ')
  let index      = props.index || 0;

  let levelDataBoard = props.levelData.board;

  // стиль с структуры (dataLesson.js)
  let style      = props.content[0].style || {}; 
  // стили в Editor (stateUser)
  let styleState = props.state.stateUser[props.state.level][props.type + 'Style'] || {};

  // поиск стилей по id и class
  if(styleState['#' + id]) {    
    style = Object.assign({}, style, styleState['#' + id]);
  }
  if(styleState['.' + className]) {
    style = Object.assign({}, style, styleState['.' + className]);
  }
  
  // замена стилей в связи с расхождением тегов в Editor и Board
  if(props.content[0].changedSyle) {
    style = Object.assign({}, style, styleState[props.content[0].changedSyle]);
  }

  if(props.content[0].color) {
    let colorClass = props.state.lesson.structure.color[levelDataBoard[index]]
    className += (' ' + colorClass);
    if(styleState['.' + colorClass]) {
      style = Object.assign({}, style, styleState['.' + colorClass]);
    }
  }
  if(props.state.statusWin && props.content[0].classWin) {
    className += (' ' + props.content[0].classWin);
  }

  let count = 1;
  let content = [];
  if(props.content.length > 1) {
    count = props.content[1].count;
    content = props.content.slice(1)

    if(props.content[1].color) {
      count = levelDataBoard.length;
    }    
  }

  
  return (
    <div id={id} className={className} style={style} >
      { props.content.length > 1 && 
        Array(count)
          .fill(null)
          .map((item, i) => <BoardItemContainer
            levelData = { props.levelData } 
            content={content} 
            type={props.type} 
            key={i} 
            index={i} />)
      }
    </div>
  );
}

export default BoardItem;
