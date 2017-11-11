import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './SideBar.scss';

// import WikiAPI from "../data/WikiAPI";

 class SideBar extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const {tags, totalTags} = this.props;

    let tagContentList;

    if (totalTags > 0) {
      tagContentList = (
        <ul className="collection">
        {
          tags.map( (item, index) => (
            <li key={index} className="collection-item">
              {item}
            </li>
          ))
        }
        </ul>
      );
    }

    return (
      <div className="SideBar">
        <p>Total tags: {totalTags}</p>
       {tagContentList}
      </div>
    );
  }
}

export default SideBar;
