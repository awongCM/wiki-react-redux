import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './WikiFormSection.scss';

import WikiForm from './WikiForm';

class WikiFormSection extends Component {

  handleSubmit(values){
    console.log(values);
  }

  render() {
    return (
      <div className="WikiFormSection">
        <h2>Wiki Form </h2>
        <div className="row">
          <div className="col s12">
              <WikiForm onSubmit={this.handleSubmit} />            
          </div>
        </div>
        <Link to='/wikis'>Return to Wiki List</Link>
      </div>
    );
  }
}

export default WikiFormSection;
