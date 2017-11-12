import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './WikiSection.scss';

import Wiki from './Wiki';

class WikiSection extends Component {
  
  render() {
    return (
      <Wiki></Wiki>
    )
  }
}

export default WikiSection;
