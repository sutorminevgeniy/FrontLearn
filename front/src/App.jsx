import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { history } from './store';

import LessonContainer from './container/LessonContainer';
import TopicsContainer from './container/TopicsContainer';
import CreditsContainer from './container/CreditsContainer';
import PrivateRouteContainer from './container/PrivateRouteContainer';
import LoginContainer from './container/LoginContainer';
import LogoutContainer from './container/LogoutContainer';
import ToolbarContainer from './container/ToolbarContainer';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      user: null
    }    
  } 

  render() {
    return (
      <div>
        <ToolbarContainer user={this.state.user} />

        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path="/login" render={props => <LoginContainer />} />
            <Route path="/logout" render={props => <LogoutContainer />} />
            <PrivateRouteContainer exact path='/lessons/:topic?' component={TopicsContainer} />
            <PrivateRouteContainer path='/lessons/:topic/:lessonId' component={LessonContainer} />

            <Route component={NotFound} />
          </Switch>
        </div>

        <CreditsContainer />

      </div>
    );      
  }  
}

export default App;
