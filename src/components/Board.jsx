import React from 'react';

function Board(props) {
  let style = props.state.stateUser[props.state.level][props.styleFigurs];
  let levelData = props.levelData;
  
  let className = '';
  if(levelData.classes && levelData.classes['#pond, #background']) {
    className = levelData.classes['#pond, #background'];
  }
  
  return (
    <div 
      id   ={ props.id } 
      className ={ className } 
      style={ style[ '#pond' ] ? style[ '#pond' ] : {} }
    >
      { levelData.board.split('').map((item, index) => {
        let colorItem = getColor(item);

        return (
          <div 
            key={ index } 
            className={ props.classFigurs + ' ' + colorItem }
            style={ style[ '.' + colorItem ] ? style[ '.' + colorItem ] : {} } >
              <div className={ "bg " + props.classFigureBg }></div>
          </div>
        );
      }) }
    </div>
  );
}

export default Board;

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
