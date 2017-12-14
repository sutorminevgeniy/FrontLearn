import React from 'react';

import datalLessons from '../data/datalLessons';

import Sidenav from '../components/Sidenav';
import Lessons from '../components/Lessons';

class Topics extends React.Component {
  constructor(props) {
    super(props);

    props.getTopics();
  }

  render() {
    console.log(this.props);

    return (
      <div className="topics">
        <Sidenav topics={this.props.topics} />
        <Lessons  data={datalLessons} {...this.props} />
      </div> 
    );    
  } 
}

export default Topics;