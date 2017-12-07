import datalLessons from '../data/datalLessons';

import { CHANGE_LANG, 
         NEXT_BUTTON, 
         NEXT_LEVEL, 
         PREV_LEVEL, 
         CHANGE_LEVEL, 
         INIT_STATE_USER, 
         INPUT_ANSWER } from '../actions';

const initialState = {
  level: 0,
  lang: 'ru',
  statusWin: false,
  lesson: {},
  stateUser: []
};

function lesson(state = initialState, action) {
    switch (action.type) {
        case INIT_STATE_USER:
            return initStateUser(action.lessonId, state);

        case INPUT_ANSWER:
            return Object.assign({}, state, {
                stateUser: inputAnswer(action.answer, state)
            });

        case CHANGE_LANG:
            return Object.assign({}, state, {
                lang: action.lang
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

export default lesson;

// Инициализация ==================================================================================
// Инициализация пользовательского состояния
function initStateUser(lessonId, state = initialState) {
  let resState = Object.assign({}, state);
  resState.lesson = datalLessons.filter(lesson => lesson.lessonId === lessonId)[0];
  let levels = resState.lesson.levels;

  resState.stateUser = Array(levels.length).fill(null).map((item, i) => {
    let questionStyle = getArrayStyle( levels[i].before + levels[i].after );
    let strStyleAnswer = getStrStyle( levels[i].style );
    let ansverStyle = getArrayStyle( levels[i].before + strStyleAnswer + levels[i].after );

    return {
      passed: false,
      answer: '',
      ansverStyle,
      questionStyle
    };
  });

  resState.level = 0;

  return resState;
}

// Разбор строки стилей в массив
function getArrayStyle (strStyle) {
    let arrStyle = '{' + strStyle + '}';

    arrStyle = arrStyle.replace(/([\{\}])\s*([^\{\}:;"]*)\s+\{/g, '$1 "$2": {')
                       .replace(/([\{;])\s*([^\{\}:;"]*)\s*:/g, '$1 "$2": ')
                       .replace(/:\s*([^\{\}"]+)\s*;/g, ': "$1";')              // добавление кавычек
                       .replace(/;/g, '')                                       // удаление всех ;
                       .replace(/(["\}])(\s+["\{])/g, '$1,$2');
    // преобразование в верблюжью нотацию
    arrStyle = arrStyle.replace(/-(\w)(\w*":)/g, (match, p1, p2) => p1.toUpperCase() + p2); 

    return JSON.parse(arrStyle);
}

// Разбор массива стилей в строку
function getStrStyle(arrStyle) {
    let strStyle = JSON.stringify(arrStyle);

    strStyle = strStyle.replace(/[\{\}"]/g, '')
                       .replace(/:/g, ': ')
                       .replace(/,/g, '; ');

    return strStyle + ';';
}

// Ответы =========================================================================================
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
  let resIndex = resState.stateUser.findIndex( lesson => !lesson.passed );
  
  if(resIndex === -1) {
    resState.statusWin = true;
  } else {
    resState.level = resIndex;
  }
  
  return resState;
}