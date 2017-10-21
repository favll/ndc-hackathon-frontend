import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Router, IndexRoute, Route, browserHistory } from "react-router";
import BasePage from "./containers/base/BasePage";
import HomePage from "./containers/HomePage";
import "./global-styles.js";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={BasePage}>
      <IndexRoute component={HomePage} />
      <Route path="/home" component={HomePage} />
    </Route>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
