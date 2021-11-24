import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* usersSaga() {
  yield takeLatest("FETCH_USERS", workerSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
      const response = yield call(fetchUsers);
      const users = response?.data?.results;
  
      // dispatch a success action to the store with the new users
      yield put({ type: "FETCH_USERS_SUCCESS", users: users });
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put({ type: "FETCH_USERS_FAILURE", error: error });
    }
  }

// function that makes the api request and returns a Promise for response
function fetchUsers() {
  return axios({
    method: "get",
    url: "https://randomuser.me/api/"
  });
}

