import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./Main.scss";

/* To deicide where to use page component instead */
import AllWikisSection from "./AllWikisSection";
import AllWikisDefaultLayout from "./AllWikisDefaultLayout";
import WikiSection from "./WikiSection";
import WikiFormSection from "./WikiFormSection";
import Home from "./Home";

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* TODO - multiple components per page route */}
          {/* <Route path="/wikis" component={AllWikisDefaultLayout} /> */}
          <Route path="/wikis" component={AllWikisSection} />
          <Route path="/wiki/add" component={WikiFormSection} />
          <Route path="/wiki/edit/:id" component={WikiFormSection} />
          <Route path="/wiki/:id" component={WikiSection} />
        </Switch>
      </main>
    );
  }
}

export default Main;
