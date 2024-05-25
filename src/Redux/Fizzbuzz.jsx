import { createSlice } from '@reduxjs/toolkit';

const fizzBuzzSlice = createSlice({
    name : 'FizzBuzz',
  initialState: {
    number: '',
    result: [],
    fizz_result: '',
    buzz_result:'',
    fizz_buzz_result: '',
    actual_number: ''
  },
  reducers: {
    setNumber(state, action) {
      state.number = action.payload;
    },
    generateFizzBuzz(state) {
      const num = parseInt(state.number, 10);
      if (isNaN(num) || num <= 0) {
        alert('Please enter a valid positive number');
        return;
      }

      const resultArray = [];
      for (let i = 1; i <= num; i++) {
        resultArray.push(i.toString());
        if (i % 3 === 0 && i % 5 === 0){
            state.fizz_buzz_result = 'Fizz_Buzz';
            state.fizz_result = ''
            state.buzz_result = ''
            state.actual_number = ''
        } else if(i % 5 === 0){
           state.buzz_result = 'Buzz';
           state.fizz_result = '';
           state.fizz_buzz_result = '';
           state.actual_number = ''
        } else if (i % 3 === 0 ){
            state.fizz_result = 'Fizz';
            state.buzz_result = ''
            state.fizzbuzz_result = ''
            state.actual_number = ''
        }else{
           state.actual_number  = i
           state.fizz_result = ''
           state.fizz_buzz_result = ''
           state.buzz_result = ''
        }
      }
      state.result = resultArray;
    },
  },
});

export const { setNumber, generateFizzBuzz } = fizzBuzzSlice.actions;
export default fizzBuzzSlice.reducer;