import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './AllWikis.scss';

import SideBar from './SideBar';

import WikiAPI from '../data/WikiAPI';

class AllWikis extends Component {

  showDateFormat(createdAt) {
    
    const wikiDateFormat = new Date (createdAt);

    return wikiDateFormat.toGMTString();
  }

  render() {
    return (
      //TODO - use multiple components per route
      <div className="row">
        <div className="col s3">
          <SideBar></SideBar>  
        </div>
        <div className="col s9">
          <div className="AllWikis">
            <ul>
              {
              WikiAPI.all().map(w => (
                <li key={w.id}>
                    <div className="content">
                      <Link to={`/wiki/${w.id}`}>{w.title}</Link>
                      <p>{w.content}</p>
                      <small>Author: {w.author}</small>
                      <small>Date: {this.showDateFormat(w.createdAt)}</small>
                    </div>
                </li>
              ))
              }
            </ul>
          </div>
        </div>
      </div>     
    );
  }
}

export default AllWikis;
