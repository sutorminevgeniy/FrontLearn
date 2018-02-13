import lessonTempl from './lessontempl';
import confLesson from '../confLesson';

import { GET_LESSON,
         EDIT_LESSON, 
         SET_VALUE,
         ADD_LEVEL,
         DELETE_LEVEL,
         NEXT_BUTTON, 
         NEXT_LEVEL, 
         PREV_LEVEL, 
         CHANGE_LEVEL } from '../actions';

const initialState = {
  level: 0,
  lang: 'ru',
  newUrl: null,
  incorrField: {},
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

    if(confLesson[action.path] && confLesson[action.path].req && action.value === '' ){
      resState.incorrField[action.path] = 'Поле должно быть заполнено';
    } else if(resState.incorrField[action.path]) {
      delete resState.incorrField[action.path];
    }

    return resState;
}

function editLesson(state, action) {
  let resState = Object.assign({}, state);

  // редирект на новый id при певой записи нового урока
  if(action.info.newUrl){
    resState.newUrl = action.info.newUrl;
  }

  // результаты проверки на корректность ввода
  if(action.info.incorrField){
    resState.incorrField = action.info.incorrField;
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