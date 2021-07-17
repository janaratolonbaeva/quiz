import {createSlice} from "@reduxjs/toolkit";

const name = 'preferences';

const preferencesSlice = createSlice({
  name,
  initialState: {
    category: '',
    difficulty: '',
    type: '',
    amount: 10
  },
  reducers: {
    changeCategory: (state, {payload: category}) => {
      state.category = category;
    },
    changeDifficulty: (state, {payload: difficulty}) => {
      state.difficulty = difficulty;
    },
    changeType: (state, {payload: type}) => {
      state.type = type;
    },
    changeAmount: (state, {payload: amount}) => {
      state.amount = amount;
    }
  }
});

export default preferencesSlice;