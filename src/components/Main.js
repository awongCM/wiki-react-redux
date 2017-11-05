import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './Main.scss';

//TODOs more routing conditions
import AllWikis from './AllWikis';
import Wiki from './Wiki';
import SideBar from './SideBar';

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <div className="row">
          <div className="col s3">
            <SideBar></SideBar>  
          </div>
          <div className="col s9">
            <Switch>
              <Route exact path='/' component={AllWikis}></Route>
              <Route path='/:id' component={Wiki}></Route>
            </Switch>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
