import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './AllWikis.scss';

import SideBarContainer from "../containers/SideBar";


// import WikiAPI from '../data/WikiAPI';

class AllWikis extends Component {

  showDateFormat(createdAt) {
    
    const wikiDateFormat = new Date (createdAt);

    return wikiDateFormat.toGMTString();
  }



  render() {
    const {wikis} = this.props;

    let allWikisContent = (
      <h1>You do not have any wiki content at present</h1>
    );

    if (wikis.length > 0) {
      allWikisContent = (
        <ul>
        {
          wikis.map( (wiki, index) => (
            <li key={index}>
              <div className="content">
                <Link to={`/wiki/${index}`}><h4>{wiki.title}</h4></Link>
                <p>{wiki.content}</p>
                <small>Author: {wiki.author}</small>
              </div>
            </li>
          ))
        }
        </ul>
      );
    }

    return (
      //TODO - use multiple components per route
      
      <div className="row">
        <div className="col s3">
          <SideBarContainer></SideBarContainer>
        </div>
        <div className="col s9">
          <div className="AllWikis">
            {allWikisContent}
          </div>
        </div>
      </div>     
    );
  }
}

export default AllWikis;
