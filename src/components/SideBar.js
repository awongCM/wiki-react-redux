import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './SideBar.scss';

// import WikiAPI from "../data/WikiAPI";

 class SideBar extends Component {
  constructor(props){
    super(props);
  }
  
  //TODOs - to show wiki's tag category
  render() {
    return (
      <div className="SideBar">
        <p>--TODO : for tag counts--</p>
        {/* <p>Total tags: {WikiAPI.getTagCount()}</p>
        <ul className="collection">
          {
            WikiAPI.getTags().map( (item, i) => (
              <li key={i} className="collection-item">
                {item}
              </li>
            ))
          }
        </ul> */}
      </div>
    );
  }
}

export default SideBar;
