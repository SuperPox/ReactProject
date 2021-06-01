import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import manageCity from './reducers/manageCity';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const store = createStore(manageCity)

ReactDOM.render(
  <Router >
    <Provider store={store}>
      <App />,
    </Provider>,
  </Router>,
    
  document.getElementById('root')
);
