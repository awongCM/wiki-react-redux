import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './WikiFormSection.scss';

import WikiFormContainer from './WikiForm';

class WikiFormSection extends Component {

  render() {
    return (
      <div className="WikiFormSection">
        <h2>Wiki Form </h2>
        <div className="row">
          <div className="col s12">
              <WikiFormContainer/>
          </div>
        </div>
        <Link to='/wikis'>Return to Wiki List</Link>
      </div>
    );
  }
}

export default WikiFormSection;
