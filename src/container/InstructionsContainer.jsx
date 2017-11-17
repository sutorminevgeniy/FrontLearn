import React from 'react';
import { connect } from 'react-redux';

import Instructions from '../components/Instructions';

import {levels} from '../levels';

function mapStateToProps(state) {
  return {
    content: levels[state.level].instructions[state.lang]
  };
}

const InstructionsContainer = connect(mapStateToProps)(Instructions);

export default InstructionsContainer;