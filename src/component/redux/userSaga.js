import * as types from "./actionTypes";
import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import {
  loaduserSuccess,
  loaduserError,
  createuserSuccess,
  createuserError,
  deleteUserSuccess,
  deleteUserError,
  updateUserSuccess,
  updateUserError,
} from "./actions";
import {
  loadusersApi,
  createUsersApi,
  deleteUsersApi,
  updateUsersApi,
} from "./api";

function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadusersApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loaduserSuccess());
    }
  } catch (error) {
    yield put(createuserError(error.response.data));
  }
}

function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(createUsersApi, payload);
    if (response.status === 200) {
      yield put(createuserSuccess(response.data));
    }
  } catch (error) {
    yield put(loaduserError(error.response));
  }
}

function* onDeleteUserStartAsync(userId) {
  try {
    const response = yield call(deleteUsersApi, userId);
    if (response.status === 201) {
      yield put(deleteUserSuccess(userId));
    }
  } catch (error) {
    yield put(deleteUserError(error.response.data));
  }
}

function* updateUserStartAsync({ payload: { id, formValues } }) {
  try {
    const response = yield call(updateUsersApi, id, formValues);
    if (response.status === 200) {
      yield put(updateUserSuccess());
    }
  } catch (error) {
    yield put(updateUserError(error.response.data));
  }
}

function* onLoadUsers() {
  yield takeEvery(types.Load_USERS_START, onLoadUsersStartAsync);
}

function* updateUsers() {
  yield takeLatest(types.UPDATE_USER_START, updateUserStartAsync);
}

function* onCreateUser() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(types.DELETE_USER_START);
    yield call(onDeleteUserStartAsync, userId);
  }
}

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(updateUsers),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
