import React from 'react';

function Board(props) {
  let style = props.state.stateUser[props.state.level][props.styleFigurs]
  
  return (
    <div id={ props.id } style={ style[ '#pond' ] ? style[ '#pond' ] : {} }>
      { props.dataLevel.board.split('').map((item, index) => {
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
