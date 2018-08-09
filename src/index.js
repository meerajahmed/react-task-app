import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import TaskAppContainer from './containers/task-app-container';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={store}>
    <TaskAppContainer />
  </Provider>,
  document.getElementById('root'));

