import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import wikiApp from "./reducers";
import { loadWikis } from "./actions";

import "materialize-css";
import "materialize-css/dist/css/materialize.css";
import "./index.scss";

import App from "./components/App";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  wikiApp,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(loadWikis());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
