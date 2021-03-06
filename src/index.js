import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
//import connectDevtools from './common/devtools';
import App from './components';
import store from './store';
import { Provider } from 'react-redux';

//connectDevtools(providers);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept();
  }
}
