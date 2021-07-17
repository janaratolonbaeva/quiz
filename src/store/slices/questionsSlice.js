import {createSlice} from "@reduxjs/toolkit";

const name = 'questions';

export const initialState = {
  questions: [],
  fetchLoading: false,
  error: null,
  indexTest: 1,
  score: {
    easy: 0,
    medium: 0,
    hard: 0
  },
  indexTestLoading: false
}

const questionsSlice = createSlice({
  name,
  initialState,
  reducers: {
    resetState: (state => initialState),
    fetchQuestionsRequest: (state) => {
      state.fetchLoading = true;
    },
    fetchQuestionsSuccess: (state, {payload: questions}) => {
      state.fetchLoading = false;
      state.questions = questions;
    },
    fetchQuestionsFailure: (state, {payload: error}) => {
      state.fetchLoading = false;
      state.error = error;
    },
    changeIndexTestLoading: (state) => {
      state.indexTestLoading = true;
    },
    changeIndexTest: (state, {payload: index}) => {
      state.indexTestLoading = false;
      state.indexTest = index
    },
    changeScore: (state, {payload: score}) => {
      if (score === 'easy') {
        state.score.easy += 1
      }
      if (score === 'medium') {
        state.score.medium += 1
      }
      if (score === 'hard') {
        state.score.hard += 1
      }
    }
  }
});

export default questionsSlice;