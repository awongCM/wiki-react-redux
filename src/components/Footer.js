import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer Footer">
        <div className="footer-copyright">
          <div className="container">
            © 2017 Copyright - Wiki React Redux
          </div>
        </div>
      </footer>    
    );
  }
}

export default Footer;
