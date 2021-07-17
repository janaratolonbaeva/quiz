import questionsSlice from "../slices/questionsSlice";

export const {
  fetchQuestionsRequest,
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
  changeIndexTestLoading,
  changeIndexTest,
  changeScore,
  resetState
} = questionsSlice.actions