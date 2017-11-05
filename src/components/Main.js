import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Main.scss';

//TODOs more routing conditions
import AllWikis from './AllWikis';
import Wiki from './Wiki';
import SideBar from './SideBar';
import WikiForm from './WikiForm';

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Switch>
          <Route exact path='/wiki' component={AllWikis}></Route>
          <Route path='/wiki/:id' component={Wiki}></Route>
          <Route path='/add-wiki/' component={WikiForm}></Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
