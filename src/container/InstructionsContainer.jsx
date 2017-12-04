import React from 'react';
import { connect } from 'react-redux';

import Instructions from '../components/Instructions';

import {levels} from '../data/levels';

function mapStateToProps(state) {
  return {
    content: levels[state.reducer.level].instructions[state.reducer.lang]
  };
}

const InstructionsContainer = connect(mapStateToProps)(Instructions);

export default InstructionsContainer;