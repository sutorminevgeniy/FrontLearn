import React from 'react';

import topics from '../data/topics';
import datalLessons from '../data/datalLessons';

import Sidenav from '../components/Sidenav';
import Lessons from '../components/Lessons';

function Topics(props){
  return (
    <div className="topics">
      <Sidenav topics={topics} />
      <Lessons  data={datalLessons} {...props} />
    </div> 
  );
}

export default Topics;