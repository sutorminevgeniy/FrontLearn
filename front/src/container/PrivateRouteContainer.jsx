import { connect } from 'react-redux';

import PrivateRoute from '../components/PrivateRoute';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute);

export default PrivateRouteContainer;