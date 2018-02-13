import { connect } from 'react-redux';

import { setValue } from '../actions';
import Field from '../components/Field';

function mapStateToProps(state) {
  return {
    main: state.main,
    lesson: state.lesson,
    topics: state.topics
  };
}

function mapDispatchToProps(dispatch) {
    return {
        setValue: (path, value) => dispatch(setValue(path, value))
    };
}

const FieldContainer = connect(mapStateToProps, mapDispatchToProps)(Field);

export default FieldContainer;