import React from 'react';

function BoardOther(props) {
  console.log(props.content);
  let id = props.content.param.id || "";
  let className = props.content.param.className || "";  
  let style = props.content.param.style || {};
  
  return (
    <div id={id} className={className} style={style}>
      { 'content' in props.content && props.content.content.map((content, index) => {
        
        let count = content.count || 1;

        return (
          Array(count)
            .fill(null)
            .map((item, i) => <BoardOther content={content} key={index+i}/>)
          );
      })}
    </div>
  );
}

export default BoardOther;

  // Фигуры =========================================================================================
  // Получение цвета
function  getColor(color = '') {
    switch (color) {
      case 'g':
        return 'green';
        break;
      case 'y':
        return 'yellow';
        break;
      case 'r':
        return 'red';
        break;
    }
  }