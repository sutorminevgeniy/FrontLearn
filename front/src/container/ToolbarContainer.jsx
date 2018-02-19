import { connect } from 'react-redux';

import Toolbar from '../components/Toolbar';

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const ToolbarContainer = connect(mapStateToProps)(Toolbar);

export default ToolbarContainer;