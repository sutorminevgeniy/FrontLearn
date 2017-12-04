import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board';

import {levels} from '../data/levels';

function mapStateToProps(state) {
  let dataLevel = levels[state.reducer.level];

  return {
    state: state.reducer,
    dataLevel
  };
}

const BoardContainer = connect(mapStateToProps)(Board);

export default BoardContainer;