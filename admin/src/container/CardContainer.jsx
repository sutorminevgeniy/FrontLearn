import { connect } from 'react-redux';

import { deleteLesson } from '../actions';
import Card from '../components/Card';

function mapDispatchToProps(dispatch) {
    return {
        deleteLesson: (lessonId) => dispatch(deleteLesson(lessonId)),
    };
}

const CardContainer = connect(null, mapDispatchToProps)(Card);

export default CardContainer;