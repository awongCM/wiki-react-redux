import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SideBar.scss";

import TagContainer from "../containers/Tag";

class SideBar extends Component {
  render() {
    const { tags, totalTags, tagFilter, onShowAllClick } = this.props;

    let tagListContent;
    let tagCounterContent;

    if (totalTags > 0) {
      tagCounterContent = <p>Total tags: {totalTags}</p>;
      tagListContent = (
        <ul className="collection">
          <li
            className={`collection-item ${tagFilter === "SHOW_ALL_TAGS" ? "active" : ""}`}
            onClick={onShowAllClick}
          >
            Show all
          </li>
          {tags.map((item, index) => (
            <TagContainer key={index} item={item} />
          ))}
        </ul>
      );
    } else {
      tagCounterContent = <p>No Tag Categories are found</p>;
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
