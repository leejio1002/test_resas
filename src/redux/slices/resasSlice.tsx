// src/features/counter/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Prefecture } from '../../lib/types';

// Define the initial state using a TypeScript interface
interface CounterState {
  prefectures: Array<Prefecture>;
}

const initialState: CounterState = {
  prefectures: [],
};

const resasSlice = createSlice({
  name: 'resas',
  initialState,
  reducers: {
    loadPrefectures: (state, action) => {
      state.prefectures = action.payload;
    },
  },
});

export const { loadPrefectures } = resasSlice.actions;
export default resasSlice.reducer;
