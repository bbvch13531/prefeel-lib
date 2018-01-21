import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import styles from './App.scss';

import Header from 'containers/Header';
import MainPage from 'containers/MainPage';
import LibraryPage from 'containers/LibraryPage';
import PracticePage from 'containers/PracticePage';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/library/:library' component={LibraryPage} />
          <Route path='/practice' component={PracticePage} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);