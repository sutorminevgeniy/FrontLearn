import { connect } from 'react-redux';

import { getTopics } from '../actions';
import Topics from '../pages/Topics';

function mapStateToProps(state) {
    return {
        topics: state.topics.topics,
        lessons: state.topics.lessons
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTopics: () => dispatch(getTopics())
    };
}

const TopicsContainer = connect(mapStateToProps, mapDispatchToProps)(Topics);

export default TopicsContainer;