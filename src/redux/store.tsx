// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import resasSlice from './slices/resasSlice';

export const store = configureStore({
  reducer: {
    resas: resasSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
