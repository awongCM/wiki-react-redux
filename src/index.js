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
registerServiceWorker();

/* Debugging purpooses */
// import { 
//   addWiki,
//   deleteWiki,
//   updateWiki,
//   setTagFilter,
//   TagFilters
//  } from './actions';

/* For Debugging purposes later */
// console.log(store.getState());

// const unsubscribe = store.subscribe(()=> console.log(store.getState()));

// //Dispatch actions
// store.dispatch(addWiki({title: 'Test1 ', description: 'blah1 blah1', author: 'Andy Wong' }));
// store.dispatch(addWiki({title: 'Test2 ', description: 'blah2 blah2', author: 'Andy Wong' }));
// store.dispatch(addWiki({title: 'Test3 ', description: 'blah3 blah3', author: 'Andy Wong' }));
// store.dispatch(updateWiki(0, {title: 'Test1 ', description: 'blah1 blah1 blah1', author: 'Andy Wong Wong' }));
// store.dispatch(updateWiki(1, {title: 'Test222 ', description: 'blah2 blah2', author: 'Andy Wong' }));
// store.dispatch(deleteWiki(2));
// store.dispatch(setTagFilter(TagFilters.SHOW_SELECTED_TAG));
// store.dispatch(setTagFilter(TagFilters.SHOW_ALL_TAGS));

// //unsubscribe

// unsubscribe();