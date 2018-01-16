import { GET_LESSON,
         EDIT_LESSON, 
         NEXT_BUTTON, 
         NEXT_LEVEL, 
         PREV_LEVEL, 
         CHANGE_LEVEL, 
         SET_VALUE } from '../actions';

const initialState = {
  level: 0,
  lang: 'ru',
  statusWin: false,
  lesson: false,
  stateUser: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LESSON:
      return action.lesson;
      
    case EDIT_LESSON:
      return state;

    case SET_VALUE:
      return setValue(state, action);

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