import React from 'react';

function Board(props) {
  return (
    <div id={ props.id } style={ props.style[ '#pond' ] ? props.style[ '#pond' ] : '' }>
      { props.dataLevel.board.split('').map((item, index) => {
        let colorItem = props.getColor(item);

        return (
          <div 
            key={ index } 
            className={ props.classFigurs + ' ' + colorItem }
            style={ props.style[ '.' + colorItem ] ? props.style[ '.' + colorItem ] : {} } >
              <div className={ "bg " + props.classFigureBg }></div>
          </div>
        );
      }) }
    </div>
  );
}

export default Board;