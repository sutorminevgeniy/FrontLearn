import React from 'react';

import topics from '../data/topics';
import lessons from '../data/lessons';

import Sidenav from '../components/Sidenav';
import Lessons from '../components/Lessons';

function Topics(props){
  return (
    <div className="topics">
      <Sidenav topics={topics} />
      <Lessons  data={lessons} {...props} />
    </div> 
  );
}

export default Topics;