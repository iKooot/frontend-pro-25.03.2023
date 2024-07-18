import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./users.slice.js";
import { FETCH_USERS_ACTION } from "./users.actions.js";
import { getUsers } from "../../api";

export function* fetchUsersSaga({ payload }) {
  try {
    yield put(fetchUsersStart()); // Update state to loading

    const { data } = yield call(getUsers, payload.signal);

    const preparedData = data.map((el) => ({
      id: el.id,
      name: el.first_name,
      surname: el.last_name,
    }));

    yield put(fetchUsersSuccess(preparedData));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export function* watchFetchUsersSagas() {
  yield takeLatest(FETCH_USERS_ACTION.type, fetchUsersSaga);
}
