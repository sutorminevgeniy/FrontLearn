import { connect } from 'react-redux';

import { getLesson } from '../actions';
import Lesson from '../components/Lesson';

function mapStateToProps(state) {
    return {
        lesson: state.lesson
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getLesson: (lessonId) => dispatch(getLesson(lessonId))
    };
}

const LessonContainer = connect(mapStateToProps, mapDispatchToProps)(Lesson);

export default LessonContainer;