import React from 'react';
import { connect } from 'react-redux';

import Board from '../components/Board';

import {levels} from '../levels';

function mapStateToProps(state) {
  let dataLevel = levels[state.level];

  return {
    state,
    dataLevel
  };
}

const BoardContainer = connect(mapStateToProps)(Board);

export default BoardContainer;