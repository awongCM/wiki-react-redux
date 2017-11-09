import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './WikiForm.scss';

class WikiForm extends Component {
  render() {
    return (
      <div className="WikiForm">
        <h2>WikiForm</h2>
        <div className="row">
          <div className="col s12">
            <form class="form-container" action="">
              <div className="input-field">
                <label htmlFor="title" >Title</label>
                <input type="text" id="title"/>
              </div>
              <div className="input-field">
                <label htmlFor="content">Content</label>
                <input type="text" id="content" />
              </div>
              <div className="input-field">
                <label htmlFor="author">Author</label>
                <input type="text" id="author" />
              </div>
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            </form>
          </div>
        </div>
        
        <Link to='/wiki'>Return to Wiki List</Link>
      </div>
    );
  }
}

export default WikiForm;
