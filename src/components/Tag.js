import React from "react";
import "./Tag.scss";

const Tag = ({ item, onTagClick, activeTag }) => {
  return (
    <li
      className={`collection-item ${activeTag === item ? "active" : ""}`}
      onClick={() => onTagClick(item)}
    >
      {item}
    </li>
  );
};

export default Tag;
