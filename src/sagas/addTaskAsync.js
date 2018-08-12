import {take, put} from 'redux-saga/effects';
import {ADD_TASK_ASYNC} from "../actions/addTaskAsync";
import {delay} from "redux-saga";
import addTask from "../actions/addTask";

export default function* addTaskAsync() {
  while (true) {
    const {payload} = yield take(ADD_TASK_ASYNC);
    yield delay(1000); // save in DB here...
    yield put(addTask(payload)); // update store
  }
}