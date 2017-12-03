import React from 'react';
import { connect } from 'react-redux';

import { nextLevel, inputAnswer } from '../actions';
import Editor from '../components/Editor';

function mapStateToProps(state) {
    return {
        state: state.reducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        nextLevel: () => dispatch(nextLevel()),
        inputAnswer: answer => dispatch(inputAnswer(answer))
    };
}

const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(Editor);

export default EditorContainer;