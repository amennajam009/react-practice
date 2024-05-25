import { configureStore } from '@reduxjs/toolkit';
import fizzBuzzReducer from './Fizzbuzz';

const store = configureStore({
  reducer: {
    fizzBuzz: fizzBuzzReducer,
  },
});

export default store;