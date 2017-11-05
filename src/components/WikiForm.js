import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class WikiForm extends Component {
  render() {
    return (
      <div className="WikiForm">
        <h2>WikiForm</h2>
        <form action="">
          <label htmlFor="">Title</label>
          <input type="text"/>
          <label htmlFor="">Content</label>
          <input type="text"/>
          <input type="submit"/>
        </form>
        <Link to='/wiki'>Return to Wiki List</Link>
      </div>
    );
  }
}

export default WikiForm;
