import React, { Component } from "react";
import ShowLayout from "./components/ShowLayout";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/layout" component={ShowLayout} />
        </Switch>
      </Router>
    );
  }
}

export default Home;
