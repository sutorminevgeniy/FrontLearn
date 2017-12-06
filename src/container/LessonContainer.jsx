import React from 'react';
import { connect } from 'react-redux';

import { initStateUser } from '../actions';
import Lesson from '../components/Lesson';

function mapStateToProps(state) {
    return {
        state: state.reducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        initStateUser: (lessonId) => dispatch(initStateUser(lessonId))
    };
}

const LessonContainer = connect(mapStateToProps, mapDispatchToProps)(Lesson);

export default LessonContainer;