import {levels, levelWin} from '../data/levels';

import { CHANGE_LANG, 
         NEXT_LEVEL, 
         PREV_LEVEL, 
         CHANGE_LEVEL, 
         INIT_STATE_USER, 
         INPUT_ANSWER } from '../actions';

let stateUser = Array(levels.length).fill(null).map((item, i) => {
  return {
    passed: false,
    answer: '',
    ansverStyle: {},
    questionStyle: {}
  };
});

const initialState = {
  level: 0,
  lang: 'ru',
  stateUser: stateUser
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case INIT_STATE_USER:
            return Object.assign({}, state, {
                stateUser: initStateUser()
            });

        case INPUT_ANSWER:
            return Object.assign({}, state, {
                stateUser: inputAnswer(action.answer, state)
            });

        case CHANGE_LANG:
            return Object.assign({}, state, {
                lang: action.lang
            });

        case NEXT_LEVEL:
            return Object.assign({}, state, {
                level: state.level + 1
            });

        case PREV_LEVEL:
            return Object.assign({}, state, {
                level: state.level - 1
            });

        case CHANGE_LEVEL:
            return Object.assign({}, state, {
                level: action.level
            });

        default:
            return state;
    }
}

export default reducer;

// Инициализация ==================================================================================
// Инициализация пользовательского состояния
function initStateUser() {
    let stateUser = Array(levels.length).fill(null).map((item, i) => {
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

    return stateUser;
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