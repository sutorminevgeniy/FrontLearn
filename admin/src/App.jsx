import React from 'react';
import { Route, Switch } from 'react-router-dom';

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

function App() {
  return (
    <div>
      <ToolbarContainer />

      <main>
        <div className="content">
          <Switch>
            <Route exact path='/admin' component={Home} />
            <Route path='/admin/about' component={About} />
            <Route path="/admin/login" component={LoginContainer} />
            <Route path="/admin/logout" component={LogoutContainer} />
            <PrivateRouteContainer exact path='/admin/lessons/:topic?' component={TopicsContainer} />
            <PrivateRouteContainer path='/admin/lessons/:topic/:lessonId' component={LessonContainer} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </main>

      <CreditsContainer />

    </div>
  );
}

export default App;
