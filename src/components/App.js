import React, { Component } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './App.scss';

import NavBar from './NavBar';
import Main from './Main';
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <NavBar></NavBar>
          <Main></Main>
          <Footer></Footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
