import {levels, levelWin} from '../levels';

import { CHANGE_LANG, NEXT_LEVEL, PREV_LEVEL, CHANGE_LEVEL, INIT_STATE_USER } from '../actions';

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

function getStateUser() {
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

function reducer(state = {}, action) {
    switch (action.type) {
        case INIT_STATE_USER:
            return Object.assign({}, state, {
                stateUser: getStateUser()
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