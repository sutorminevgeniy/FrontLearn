import { connect } from 'react-redux';

import BoardItem from '../components/BoardItem';

function mapStateToProps(state) {
  return {
    state: state.lesson
  };
}

const BoardItemContainer = connect(mapStateToProps)(BoardItem);

export default BoardItemContainer;