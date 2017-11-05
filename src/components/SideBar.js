import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './SideBar.scss';

class SideBar extends Component {
  constructor(props){
    super(props);
  }
  
  //TODOs - to show wiki's tag category
  render() {
    return (
      <div className="SideBar">
        <h1>SideBar</h1>
        <ul className="collection">
          <li className="collection-item">Alvin</li>
          <li className="collection-item">Alvin</li>
          <li className="collection-item">Alvin</li>
          <li className="collection-item">Alvin</li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
