import {all} from 'redux-saga/effects';
import questionsSaga from "./sagas/questionsSaga";

export default function* rootSaga() {
  yield all ([
    ...questionsSaga,
  ])
}