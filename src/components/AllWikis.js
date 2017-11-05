import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './AllWikis.scss';

import WikiAPI from '../data/WikiAPI';

class AllWikis extends Component {
  render() {
    return (
      <div className="AllWikis">
        <ul>
          {
           WikiAPI.all().map(w => (
             <li key={w.id}>
                <Link to={`/${w.id}`}>{w.title}</Link>
             </li>
           ))
          }
        </ul>
      </div>
    );
  }
}

export default AllWikis;
