import React from 'react';
import { connect } from 'react-redux';

import BoardOther from '../components/BoardOther';

function mapStateToProps(state) {
  return {
    state: state.lesson
  };
}

const BoardOtherContainer = connect(mapStateToProps)(BoardOther);

export default BoardOtherContainer;