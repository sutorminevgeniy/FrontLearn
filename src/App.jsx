import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LessonContainer from './container/LessonContainer';
import TopicsContainer from './container/TopicsContainer';

import Toolbar from './components/Toolbar';
import Credits from './components/Credits';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <Toolbar user={null} />

        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route exact path='/lessons/:topic?' component={TopicsContainer} />
            <Route path='/lessons/:topic/:lessonId' component={LessonContainer} />

            <Route component={NotFound} />
          </Switch>
        </div>

        <Credits />

      </div>
    );      
  }  
}

export default App;
