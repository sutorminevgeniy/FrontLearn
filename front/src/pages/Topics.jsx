import React from 'react';

import Sidenav from '../components/Sidenav';
import Lessons from '../components/Lessons';

class Topics extends React.Component {
  constructor(props) {
    super(props);

    props.getTopics();
  }

  render() {
    return (
      <div className="topics">
        <Sidenav topics={this.props.topics} />
        <Lessons  data={this.props.lessons} {...this.props} />
      </div> 
    );    
  } 
}

export default Topics;