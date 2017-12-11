import { connect } from 'react-redux';

import Instructions from '../components/Instructions';

function mapStateToProps(state) {
  return {
    title: state.lesson.lesson.title
  };
}

const InstructionsContainer = connect(mapStateToProps)(Instructions);

export default InstructionsContainer;