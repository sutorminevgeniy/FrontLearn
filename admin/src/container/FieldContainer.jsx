import { connect } from 'react-redux';

import { nextButton, inputAnswer } from '../actions';
import Field from '../components/Field';

function mapStateToProps(state) {
  return {
    main: state.main,
    lesson: state.lesson
  };
}

function mapDispatchToProps(dispatch) {
    return {
        nextButton: () => dispatch(nextButton()),
        inputAnswer: answer => dispatch(inputAnswer(answer))
    };
}

const FieldContainer = connect(mapStateToProps, mapDispatchToProps)(Field);

export default FieldContainer;