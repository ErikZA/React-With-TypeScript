import { all, takeLatest } from 'redux-saga/effects';

import { LubyTaskTypes } from './lubytasks/types';
import { load } from './lubytasks/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(LubyTaskTypes.LOAD_REQUEST, load),
  ]);
}
