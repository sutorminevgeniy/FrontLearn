import { connect } from 'react-redux';

import { exitUser } from '../actions';
import Logout from '../pages/Logout';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    exitUser: () => dispatch(exitUser())
  };
}

const LogoutContainer = connect(mapStateToProps, mapDispatchToProps)(Logout);

export default LogoutContainer;