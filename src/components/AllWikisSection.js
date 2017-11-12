import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './AllWikisSection.scss';

import AllWikisContainer from '../containers/AllWikis';

class AllWikisSection extends Component {

  render() {
    return (
      <AllWikisContainer></AllWikisContainer>
    );
  }
}

export default AllWikisSection;
