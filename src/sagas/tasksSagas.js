import { put } from "redux-saga/effects";
import {
  createTaskError,
  createTaskRequest,
  createTaskSuccess,
  getTasksError,
  getTasksRequest,
  getTasksSuccess,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
} from "../actions";
import * as API from "../api";

export function* getTasksSaga() {
  yield put(getTasksRequest());

  try {
    const { data: tasks } = yield API.getTasks();

    yield put(getTasksSuccess(tasks));
  } catch (e) {
    yield put(getTasksError(e));
  }
}

export function* createTaskSaga(action) {
  const { task } = action;

  yield put(createTaskRequest());
  try {
    const { data: newTask } = yield API.createTask(task);
    yield put(createTaskSuccess(newTask));
  } catch (e) {
    yield put(createTaskError(e));
  }
}

export function* deleteTaskSaga(action) {
  const { id } = action;
  yield put(deleteTaskRequest());
  try {
    const { data: deletedTask } = yield API.deleteTask(id);
    yield put(deleteTaskSuccess(deletedTask));
  } catch (e) {
    yield put(deleteTaskError(e));
  }
}
