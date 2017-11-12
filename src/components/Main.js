import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Main.scss';

//TODOs more routing conditions

/* To deicide where to use page component instead */
import AllWikisSection from './AllWikisSection';
import WikiSection from './WikiSection';
import WikiFormSection from './WikiFormSection';
import Home from "./Home";

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/wikis' component={AllWikisSection}></Route>
          <Route path='/wiki/:id' component={WikiSection}></Route>
          <Route path='/add-wiki/' component={WikiFormSection}></Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
