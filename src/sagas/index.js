import { takeEvery, put,fork } from "redux-saga/effects";
import watchImagesLoad from "./imagesSaga";

//watcher saga
function* testWatcherSaga() {
  yield takeEvery("HELLO", testWorkerSaga);
  return "s";
}

//worker saga
function* testWorkerSaga() {
  console.log("hey from worker");
  yield put({ type: "ACTION_FROM_WORKER" });
}

//root saga
function* rootSaga(){
  yield [
    fork(testWatcherSaga),
    fork(watchImagesLoad)
];
}

export default rootSaga;
