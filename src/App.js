import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import NavBar from './NavBar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Main></Main>
      </div>
    );
  }
}

export default App;
