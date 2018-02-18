import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './SideBar.scss';

import TagContainer from '../containers/Tag';

 class SideBar extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const {tags, totalTags} = this.props;

    let tagListContent, tagCounterContent;

    if (totalTags > 0) {
      tagCounterContent = (<p>Total tags: {totalTags}</p>);
      tagListContent = (
        <ul className="collection">
        {
          tags.map( (item, index) => (
            <TagContainer key={index} item={item} tagFilter="SHOW_ALL_TAGS"></TagContainer>
          ))
        }
        </ul>
      );
    } else {
      tagCounterContent = (<p>No Tag Categories are found</p>);
    }

    return (
      <div className="SideBar">
       {tagCounterContent}
       {tagListContent}
      </div>
    );
  }
}

export default SideBar;
