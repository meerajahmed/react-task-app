import {takeEvery, put} from 'redux-saga/effects';
import {ADD_TASK_ASYNC} from "../actions/addTaskAsync";
import {delay} from "redux-saga";
import addTask from "../actions/addTask";

function* addTaskAsync() {
  yield delay(20000); // save in DB here...
}

export default function* addTaskSaga() {
  while (true) {
    const {payload} = yield takeEvery(ADD_TASK_ASYNC, addTaskAsync);
    yield put(addTask(payload)); // update store
  }
}