import { CHANGE_LANG, NEXT_LEVEL, PREV_LEVEL, CHANGE_LEVEL } from '../actions';


function reducer(state = {}, action) {
    switch (action.type) {
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