import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Tag.scss';

const Tag = ({item}) => {
  const shoutTag = (event) => {
    alert(`You just clicked '${item}' tag!`);
  };
  // TODO Add tag filter option here
  return (
    <li className="collection-item" onClick={shoutTag}>{item}</li>
  );
}

export default Tag;