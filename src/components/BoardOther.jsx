import React from 'react';

import BoardOtherContainer   from '../container/BoardOtherContainer';

function BoardOther(props) {
  console.log(props);
  let id = props.content.param.id || "";
  let className = props.content.param.className || "";  
  let style = props.content.param.style || {};
  let color = props.content.color || false;
  let index = props.index || 0;

  let levelData = props.levelData.board;

  if(props.content.color) {
    className += (' ' + props.state.lesson.structure.color[levelData[index]]);
  }
  
  return (
    <div id={id} className={className} style={style}  color={""+color}>
      { 'content' in props.content && props.content.content.map((content, index) => {

        let count = content.count || 1;

        if(content.color) {
          count = levelData.length;
        }

        return (
          Array(count)
            .fill(null)
            .map((item, i) => <BoardOtherContainer
              levelData = { props.levelData } content={content} key={i} index={i} />)
          );
      })}
    </div>
  );
}

export default BoardOther;
