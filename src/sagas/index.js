import {fork} from 'redux-saga/effects';

import addTaskAsync from './addTaskAsync';
export default function* rootSaga() {
  yield fork(addTaskAsync);
}