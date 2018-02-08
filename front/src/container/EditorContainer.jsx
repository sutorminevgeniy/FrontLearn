import { connect } from 'react-redux';

import { nextButton, inputAnswer } from '../actions';
import Editor from '../components/Editor';

function mapStateToProps(state) {
    return {
        main: state.main,
        state: state.lesson.lesson
    };
}

function mapDispatchToProps(dispatch) {
    return {
        nextButton: () => dispatch(nextButton()),
        inputAnswer: answer => dispatch(inputAnswer(answer))
    };
}

const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(Editor);

export default EditorContainer;