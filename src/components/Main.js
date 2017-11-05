import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Main.scss';

//TODOs more routing conditions
import AllWikis from './AllWikis';
import Wiki from './Wiki';

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Switch>
          <Route exact path='/' component={AllWikis}></Route>
          <Route path='/:id' component={Wiki}></Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
