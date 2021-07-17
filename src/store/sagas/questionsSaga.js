import {put, takeEvery} from 'redux-saga/effects';
import {fetchQuestionsFailure, fetchQuestionsRequest, fetchQuestionsSuccess} from "../actions/questionsAction";
import axios from "axios";

export function* fetchQuestions({payload: url}) {
  try {
    const response = yield axios.get(url);
    yield put(fetchQuestionsSuccess(response.data.results));
  } catch (e) {
    yield put(fetchQuestionsFailure(e));
  }
}

const questionsSaga = [
  takeEvery(fetchQuestionsRequest, fetchQuestions)
];

export default questionsSaga;