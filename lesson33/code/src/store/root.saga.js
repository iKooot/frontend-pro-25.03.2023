import { all } from "redux-saga/effects";
import { watchFetchUsersSagas } from "./users/index.js";
export function* rootSaga() {
  yield all([watchFetchUsersSagas()]);
}
