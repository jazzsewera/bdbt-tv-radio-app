import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.js';
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement

if ((import.meta as any).hot) {
  (import.meta as any).hot.accept();
}
