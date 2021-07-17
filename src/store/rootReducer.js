import {combineReducers} from "redux";
import questionsSlice from "./slices/questionsSlice";
import preferencesSlice from "./slices/preferencesSlice";

const rootReducer = combineReducers({
  questions: questionsSlice.reducer,
  preferences: preferencesSlice.reducer
});

export default rootReducer;