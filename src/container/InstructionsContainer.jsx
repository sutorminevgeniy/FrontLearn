import { connect } from 'react-redux';

import Instructions from '../components/Instructions';

function mapStateToProps(state) {
  return {
    lesson: state.lesson
  };
}

const InstructionsContainer = connect(mapStateToProps)(Instructions);

export default InstructionsContainer;