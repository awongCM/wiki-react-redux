import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import wikiApp from "./reducers";

import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import './index.scss';

import App from './components/App';

let store = createStore(
  wikiApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
