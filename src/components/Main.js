import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Main.scss';

//TODOs more routing conditions
import AllWikisContainer from '../containers/AllWikis'; /* To deicide where to use page component instead */
import Wiki from './Wiki';
import SideBar from './SideBar';
import WikiFormSection from './WikiFormSection';
import Home from "./Home";

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/wikis' component={AllWikisContainer}></Route>
          <Route path='/wiki/:id' component={Wiki}></Route>
          <Route path='/add-wiki/' component={WikiFormSection}></Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
