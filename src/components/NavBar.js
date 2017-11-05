import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Navbar.scss';

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
            <a href="#" className="brand-logo">Wiki React Redux</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                
                <li><Link to='/add-wiki/'>Add New Wiki Content</Link></li>  
              </ul>
            </div>
          </div>  
        </div>
    </nav>
    );
  }
}

export default NavBar;
