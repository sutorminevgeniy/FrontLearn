import lessonTempl from './lessontempl';

import { GET_LESSON,
         EDIT_LESSON,
         ADD_LEVEL,
         DELETE_LEVEL, 
         SET_VALUE,
         NEXT_BUTTON, 
         NEXT_LEVEL, 
         PREV_LEVEL, 
         CHANGE_LEVEL } from '../actions';

const initialState = {
  level: 0,
  lang: 'ru',
  newUrl: null,
  statusWin: false,
  lesson: false,
  stateUser: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LESSON:
      return action.lesson;
      
    case EDIT_LESSON:
      return editLesson(state, action);

    case SET_VALUE:
      return setValue(state, action);

    case ADD_LEVEL:
      return addLevel(state);

    case DELETE_LEVEL:
      return deleteLevel(state);

    case NEXT_BUTTON:
        return nextButton(state);

    case NEXT_LEVEL:
      return Object.assign({}, state, {
        level: state.level + 1,
        statusWin : false
      });

    case PREV_LEVEL:
      return Object.assign({}, state, {
        level: state.level - 1,
        statusWin : false
      });

    case CHANGE_LEVEL:
      return Object.assign({}, state, {
        level: action.level,
        statusWin : false
      });

    default:
      return state;
  }
}

export default reducer;

// Ввод ответа
function setValue(state, action) {
    let pathArr = action.path.split('.');

    let resState = Object.assign({}, state);

    let resfield = resState.lesson;

    for (let key in pathArr) {
      if(typeof resfield[pathArr[key]] === 'object'){
        resfield = resfield[pathArr[key]];
      } else {
        resfield[pathArr[key]] =  action.value;
      }
    }

    return resState;
}

function editLesson(state, action) {
  let resState = Object.assign({}, state);

  if(action.info.newUrl){
    resState.newUrl = action.info.newUrl;
  }

  return resState;
}


// Добавление уровня
function addLevel(state, action) {
  let resState = Object.assign({}, state);

  resState.lesson.levels.splice(resState.level+1, 0, lessonTempl.levels[0]);
  resState.stateUser.splice(resState.level+1, 0, initialState);

  ++resState.level;

  return resState;
}

// Удаление текущего уровня
function deleteLevel(state, action) {
  let resState = Object.assign({}, state);

  resState.lesson.levels.splice(resState.level, 1);

  if(resState.lesson.levels.length === resState.level) {
    --resState.level;
  }

  return resState;
}

// следующий уровень
function nextButton(state = initialState) {
  let resState = Object.assign({}, state);
  let resIndex = resState.stateUser.findIndex( (lesson, index) => (!lesson.passed && index > resState.level));
  
  if(resIndex === -1) {
    resIndex = resState.stateUser.findIndex( lesson => !lesson.passed );
  }
  
  if(resIndex === -1) {
    resState.statusWin = true;
  } else {
    resState.level = resIndex;
  }
  
  return resState;
}