import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Content from './component/Content';

class App extends Component {
  render() {
    return (
      <div className="pre-feel lib">
      	<Header/>
      	<Content/>
      </div>
    );
  }
}

export default App;
