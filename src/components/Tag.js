import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Tag.scss';

const Tag = ({item, selectedTag, onTagClick}) => {
  
  return (
    <li className="collection-item" onClick={() => onTagClick(item)}>{item}</li>
  );
}

export default Tag;