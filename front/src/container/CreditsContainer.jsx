import { connect } from 'react-redux';

import { getMain } from '../actions';
import Credits from '../components/Credits';

function mapStateToProps(state) {
    return {
        main: state.main
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMain: () => dispatch(getMain())
    };
}

const CreditsContainer = connect(mapStateToProps, mapDispatchToProps)(Credits);

export default CreditsContainer;