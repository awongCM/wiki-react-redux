import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome to Home Page</h1>
        <Link to='/wikis'>All Wiki Content</Link>
      </div>
    );
  }
}

export default Home;
