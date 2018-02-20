import { connect } from 'react-redux';

import { getUser } from '../actions';
import Login from '../pages/Login';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: logUser => dispatch(getUser(logUser))
  };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;