import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './WikiSection.scss';

import WikiContainer from '../containers/Wiki';

class WikiSection extends Component {
  
  render() {
    return (
      <WikiContainer></WikiContainer>
    )
  }
}

export default WikiSection;
