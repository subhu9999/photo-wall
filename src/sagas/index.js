import { takeEvery, put } from "redux-saga/effects";

//watcher saga
function* rootSaga() {
  yield takeEvery("HELLO", workerSaga);
  return "s";
}

//worker saga
function* workerSaga() {
  console.log("hey from worker");
  yield put({ type: "ACTION_FROM_WORKER" });
}

export default rootSaga;
