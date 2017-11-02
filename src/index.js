import React from 'react';
import ReactDOM from 'react-dom';

//TODO - not really a good practice for 3rd party UI framework
import "./../node_modules/materialize-css/dist/js/materialize.js";
import "./../node_modules/materialize-css/dist/css/materialize.css";

import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
