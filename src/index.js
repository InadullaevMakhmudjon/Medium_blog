import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import Root from './root/Root';
import store from './redux/store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <h1>Hello</h1>
  </Provider>,
  document.getElementById('root')
);
