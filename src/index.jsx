import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './styling/styles.min.css'
import App from './App';

import { createStore, applyMiddleware } from "redux";
import { rootReducers } from "./redux/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducers, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
