import React from 'react';
import { connect } from 'react-redux';

import { changeLang } from '../actions';
import Language from '../components/Language';

function mapStateToProps(state) {
    return {
        state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeLang: lang => dispatch(changeLang(lang))
    };
}

const LanguageContainer = connect(mapStateToProps, mapDispatchToProps)(Language);

export default LanguageContainer;