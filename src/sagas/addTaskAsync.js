import {take, put, call, actionChannel} from 'redux-saga/effects';
import {ADD_TASK_ASYNC} from "../actions/addTaskAsync";
import {delay} from "redux-saga";
import addTask from "../actions/addTask";

export default function* addTaskAsync() {
  // buffer incoming ADD_TASK_ASYNC messages if the Saga is not yet ready to take them
  const addTaskChannel = yield actionChannel(ADD_TASK_ASYNC);
  while (true) {
    const {payload} = yield take(addTaskChannel);
    yield delay(1000); // save in DB here...
    yield put(addTask(payload)); // update store
  }
}