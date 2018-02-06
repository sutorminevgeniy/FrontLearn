import React from 'react';

import BoardItemContainer   from '../container/BoardItemContainer';

function BoardItem(props) {
  let id         = props.content.param.id || "";
  let className  = props.content.param.className || ""; 
  let index      = props.index || 0;

  let levelDataBoard = props.levelData.board;

  // стиль с структуры (dataLesson.js)
  let style      = props.content.param.style || {}; 
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
  if(props.content.changedSyle) {
    style = Object.assign({}, style, styleState[props.content.changedSyle]);
  }

  if(props.content.color) {
    let colorClass = props.state.lesson.structure.color[levelDataBoard[index]]
    className += (' ' + colorClass);
    if(styleState['.' + colorClass]) {
      style = Object.assign({}, style, styleState['.' + colorClass]);
    }
  }
  if(props.state.statusWin && props.content.param.classWin) {
    className += (' ' + props.content.param.classWin);
  }
  
  return (
    <div id={id} className={className} style={style} >
      { 'content' in props.content && props.content.content.map((content, index) => {

        let count = content.count || 1;

        if(content.color) {
          count = levelDataBoard.length;
        }

        return (
          Array(count)
            .fill(null)
            .map((item, i) => <BoardItemContainer
              levelData = { props.levelData } 
              content={content} 
              type={props.type} 
              key={i} 
              index={i} />)
          );
      })}
    </div>
  );
}

export default BoardItem;
