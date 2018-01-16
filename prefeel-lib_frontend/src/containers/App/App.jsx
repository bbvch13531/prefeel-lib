import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import MainPage from 'containers/MainPage';
import PracticePage from 'containers/PracticePage';
import ProjectPage from 'containers/ProjectPage';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/practice' component={PracticePage} />
          <Route path='/project' component={ProjectPage} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);