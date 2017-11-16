import { CHANGE_LANG } from '../actions';


function reducer(state = {}, action) {
    switch (action.type) {
        case CHANGE_LANG:
            return Object.assign({}, state, {
                lang: action.lang
            });

        default:
            return state;
    }
}

export default reducer;