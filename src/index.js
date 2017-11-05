import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, HashRouter } from 'react-router-dom';

//TODO - not really a good practice for 3rd party UI framework
import "./../node_modules/materialize-css/dist/js/materialize.js";
import "./../node_modules/materialize-css/dist/css/materialize.css";

import './index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((<HashRouter><App /></HashRouter>), document.getElementById('root'));
registerServiceWorker();
