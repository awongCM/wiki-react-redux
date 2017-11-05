import React, { Component } from 'react';
import './App.scss';

import NavBar from './NavBar';
import Main from './Main';
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
