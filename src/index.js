import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Router, IndexRoute, Route, browserHistory } from "react-router";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "./store/reducers";
import BasePage from "./containers/base/BasePage";
import HomePage from "./containers/HomePage";
import AncillaryPage from "./containers/AncillaryPage";
import SeatingPage from "./containers/SeatingPage";
import "./global-styles.js";

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddleware(browserHistory))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={BasePage}>
        <IndexRoute component={HomePage} />
        <Route path="/linkedin/callback" component={HomePage} />
        <Route path="/ancillary" component={AncillaryPage} />
        <Route path="/seating" component={SeatingPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
