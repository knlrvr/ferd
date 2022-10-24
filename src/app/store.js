import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../Features/carSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});