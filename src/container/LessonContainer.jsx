import React from 'react';
import { connect } from 'react-redux';

import { initStateUser } from '../actions';
import Lesson from '../components/Lesson';

function mapStateToProps(state) {
    return {
        state: state.lesson
    };
}

function mapDispatchToProps(dispatch) {
    return {
        initStateUser: (lessonId) => dispatch(initStateUser(lessonId))
    };
}

const LessonContainerWriper = connect(mapStateToProps)(Lesson);

class LessonWriper extends React.Component {
  componentWillMount() {
      this.props.initStateUser( this.props.match.params.lessonId );
  }

  render() {
    return <LessonContainerWriper />;      
  }  
}


const LessonContainer = connect(mapStateToProps, mapDispatchToProps)(LessonWriper);

export default LessonContainer;