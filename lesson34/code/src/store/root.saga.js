import { all } from 'redux-saga/effects';
import { watchFetchHotelsSagas } from './hotels';
export function* rootSaga() {
  yield all([watchFetchHotelsSagas()]);
}
