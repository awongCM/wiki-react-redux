import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './SideBar.scss';

class SideBar extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="SideBar">
        SideBar
      </div>
    );
  }
}

export default SideBar;
