import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Router, IndexRoute, Route, browserHistory } from "react-router";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "./store/reducers";
import BasePage from "./containers/base/BasePage";
import SearchPage from "./containers/SearchPage";
import LinkedInPage from "./containers/LinkedInPage";
import AncillaryPage from "./containers/AncillaryPage";
import SeatingPage from "./containers/SeatingPage";
import CheckoutPage from "./containers/CheckoutPage";
import FinalPage from "./containers/FinalPage";
import ProfilePage from "./containers/ProfilePage";
import "./global-styles.js";

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddleware(browserHistory))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={BasePage}>
        <IndexRoute component={SearchPage} />
        <Route path="/linkedin" component={LinkedInPage} />
        <Route path="/linkedin/callback" component={LinkedInPage} />
        <Route path="/ancillary" component={AncillaryPage} />
        <Route path="/seating" component={SeatingPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/final" component={FinalPage} />
        <Route path="/profile" component={ProfilePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
