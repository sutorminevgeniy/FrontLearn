import { connect } from 'react-redux';

import { getLesson, editLesson, addLevel, deleteLevel } from '../actions';
import Lesson from '../components/Lesson';

function mapStateToProps(state) {
    return {
        lesson: state.lesson
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getLesson: (lessonId) => dispatch(getLesson(lessonId)),
        editLesson: (lesson) => dispatch(editLesson(lesson)),
        addLevel: () => dispatch(addLevel()),
        deleteLevel: () => dispatch(deleteLevel())
    };
}

const LessonContainer = connect(mapStateToProps, mapDispatchToProps)(Lesson);

export default LessonContainer;