import React from 'react';

function BoardOther(props) {
  
  return (
    <BoardItem />
  );
}

function BoardItem(props) {

  
  return (
    <div></div>
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