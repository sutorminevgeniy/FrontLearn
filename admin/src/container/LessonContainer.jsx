import { connect } from 'react-redux';

import { getLesson, editLesson } from '../actions';
import Lesson from '../components/Lesson';

function mapStateToProps(state) {
    return {
        lesson: state.lesson
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getLesson: (lessonId) => dispatch(getLesson(lessonId)),
        editLesson: (lesson) => dispatch(editLesson(lesson))
    };
}

const LessonContainer = connect(mapStateToProps, mapDispatchToProps)(Lesson);

export default LessonContainer;