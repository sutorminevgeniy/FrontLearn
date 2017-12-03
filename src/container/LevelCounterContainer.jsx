import React from 'react';
import { connect } from 'react-redux';

import { nextLevel, prevLevel, changeLevel } from '../actions';
import LevelCounter from '../components/LevelCounter';

function mapStateToProps(state) {
   console.log(state);
    return {
        state: state.reducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        nextLevel: () => dispatch(nextLevel()),
        prevLevel: () => dispatch(prevLevel()),
        changeLevel: level => dispatch(changeLevel(level))
    };
}

const LevelCounterContainer = connect(mapStateToProps, mapDispatchToProps)(LevelCounter);

export default LevelCounterContainer;