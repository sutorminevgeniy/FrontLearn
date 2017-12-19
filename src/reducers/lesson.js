import { GET_LESSON, 
         NEXT_BUTTON, 
         NEXT_LEVEL, 
         PREV_LEVEL, 
         CHANGE_LEVEL, 
         INPUT_ANSWER } from '../actions';

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

    case INPUT_ANSWER:
      return Object.assign({}, state, {
        stateUser: inputAnswer(action.answer, state)
      });

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

// Ответы =========================================================================================
// Разбор строки стилей в массив
function getArrayStyle (strStyle) {
    let arrStyle = '{' + strStyle + '}';

    arrStyle = arrStyle.replace(/([{}])\s*([^{}:;"]*)\s+{/g, '$1 "$2": {')
                       .replace(/([{;])\s*([^{}:;"]*)\s*:/g, '$1 "$2": ')
                       .replace(/:\s*([^{}"]+)\s*;/g, ': "$1";')              // добавление кавычек
                       .replace(/;/g, '')                                       // удаление всех ;
                       .replace(/(["}])(\s+["{])/g, '$1,$2');
    // преобразование в верблюжью нотацию
    arrStyle = arrStyle.replace(/-(\w)(\w*":)/g, (match, p1, p2) => p1.toUpperCase() + p2);
    arrStyle = arrStyle.replace(/-(\w)(\w*":)/g, (match, p1, p2) => p1.toUpperCase() + p2); 

    return JSON.parse(arrStyle);
}

// Разбор массива стилей в строку
function getStrStyle(arrStyle) {
    let strStyle = JSON.stringify(arrStyle);

    strStyle = strStyle.replace(/[{}"]/g, '')
                       .replace(/:/g, ': ')
                       .replace(/,/g, '; ');

    return strStyle + ';';
}


// Ввод ответа
function inputAnswer(answer, state) {
    let stateUser = state.stateUser.slice();
    let levels = state.lesson.levels;
    let correctAnswer = getStrStyle(levels[state.level].style);

    stateUser[state.level].answer = answer;
    stateUser[state.level].passed = false;

    try {
      stateUser[state.level].questionStyle = getArrayStyle( levels[state.level].before + clearStr(answer) + levels[state.level].after );
    } catch (err) {
      console.log('Стиль не корректен для конвертации: ', answer);
    }

    if(clearStr(correctAnswer) === clearStr(answer)) {
      stateUser[state.level].passed = true;
    }

    console.log('Верный ответ: ',correctAnswer);

    return stateUser;
}

  // очистка строки от лишних пробельных символов
function clearStr(str) {
    let result = str;

    result = result.replace(/\n/g, '; ')          // замена перевода строк на  ;
                   .replace(/[\s;]+;/g, ';')      // очистка дублируемых ;;
                   .replace(/\s+/g, ' ')          // очисика лишних побелов
                   .replace(/(^\s*)|(\s*$)/g, '') // удаление пробелов в начале/конце
                   .replace(/([^;])$/, '$1;');    // добавление ; в конце

    return result;
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