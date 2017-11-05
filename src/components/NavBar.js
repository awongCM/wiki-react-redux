import React, { Component } from 'react';
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
                <li><a href="sass.html">Add New Wiki Content</a></li>
              </ul>
            </div>
          </div>  
        </div>
    </nav>
    );
  }
}

export default NavBar;
