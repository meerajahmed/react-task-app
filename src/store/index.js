import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';

import reducer from '../reducers/tasks';

export default createStore(reducer, devToolsEnhancer());