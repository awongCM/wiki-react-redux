import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Wiki.scss';

import WikiAPI from "../data/WikiAPI";

class Wiki extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const wiki = WikiAPI.get(
      parseInt(this.props.match.params.id, 10)
    );

    if (!wiki) {
      return (
        <div className="Wiki">
          <h1>There is no wiki content</h1>
          <Link to='/'>Back</Link>
        </div>
      );
    }

    return (
      <div className="Wiki">
        <h1>{wiki.title}</h1>
        <div className="desription">
          <p>{wiki.content}</p>
        </div>
        <Link to='/'>Back</Link>
      </div>
    );
  }
}

export default Wiki;
