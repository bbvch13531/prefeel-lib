import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Axios from 'axios';

import styles from './App.scss';

import Header from 'containers/Header';
import MainPage from 'containers/MainPage';
import PracticePage from 'containers/PracticePage';
import ProjectPage from 'containers/ProjectPage';

class App extends React.Component {

  componentDidMount(){
    return Axios({
      method: 'get',
      url: 'http://52.78.136.70:4000/api/v1.0/Library',
    })

    .then(async (response) => {
      let resdata=response.data;
      console.log(resdata);
    })

    .catch((error) =>{
      console.log("error: "+error);
    })
  }

  render() {
    return (
      <div className='App'>
        <Header />
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