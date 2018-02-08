import { connect } from 'react-redux';

import Board from '../components/Board';

function mapStateToProps(state) {
  return {
    state: state.lesson.lesson
  };
}

const BoardContainer = connect(mapStateToProps)(Board);

export default BoardContainer;