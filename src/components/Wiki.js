import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Wiki.scss';

import SideBarContainer from '../containers/SideBar';

import WikiAPI from "../data/WikiAPI";

class Wiki extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const wiki = WikiAPI.get(
      parseInt(this.props.match.params.id, 10)
    );

    let wikiContent = null;

    if (!wiki) {
      wikiContent = (
        <div className="content">
          <h1>There is no wiki content</h1>
          <Link to='/wikis'>Back</Link>
        </div>
      );
    } else {
      wikiContent = (
        <div className="content">
          <h1>{wiki.title}</h1>
          <div className="desription">
            <p>{wiki.content}</p>
          </div>
          <div className="chips chips-initial">
            {
              wiki.tags.map(tag => <div className="chip">{tag}</div> )
            }
          </div>
          <Link to='/wikis'>Back</Link>
        </div>
      )
    }

    //TODO - use multiple components per route
    return (
      <div className="row">
        <div className="col s3">
          <SideBarContainer></SideBarContainer>
        </div>
        <div className="col s9">
          <div className="Wiki">
            {wikiContent}
          </div>
        </div>
      </div>  
    )
  }
}

export default Wiki;
