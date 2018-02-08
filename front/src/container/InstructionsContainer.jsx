import { connect } from 'react-redux';

import Instructions from '../components/Instructions';

function mapStateToProps(state) {
  return {
    main: state.main,
    lesson: state.lesson.lesson
  };
}

const InstructionsContainer = connect(mapStateToProps)(Instructions);

export default InstructionsContainer;