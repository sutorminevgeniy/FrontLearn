import { connect } from 'react-redux';

import Structure from '../components/Structure';

function mapStateToProps(state) {
  return {
    main: state.main,
    lesson: state.lesson
  };
}

const StructureContainer = connect(mapStateToProps)(Structure);

export default StructureContainer;