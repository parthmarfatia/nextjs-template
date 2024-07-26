import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Type definition for the counter's state.
 * 
 * @typedef {Object} CounterState
 * @property {number} value - The current value of the counter.
 */
export interface CounterState {
    value: number;
}

// Initial state for the counter slice.
const initialState: CounterState = {
  value: 0,
};

/**
 * Slice for counter state management with Redux Toolkit.
 * This slice provides reducers for basic counter operations such as
 * increment, decrement, and increment by a specific amount.
 *
 * @exports counterSlice - The slice instance containing the reducers and actions.
 * @exports increment - Action creator for incrementing the counter.
 * @exports decrement - Action creator for decrementing the counter.
 * @exports incrementByAmount - Action creator for incrementing the counter by a specific amount.
 */
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    /**
         * Increments the counter's value by 1.
         * 
         * @param {CounterState} state - The current state of the counter.
         */
    increment: (state) => {
      state.value += 1;
    },
    /**
         * Decrements the counter's value by 1.
         * 
         * @param {CounterState} state - The current state of the counter.
         */
    decrement: (state) => {
      state.value -= 1;
    },
    /**
         * Increments the counter's value by a specified amount.
         * This is a flexible increment action that accepts the amount to increment as a payload.
         * 
         * @param {CounterState} state - The current state of the counter.
         * @param {PayloadAction<number>} action - The payload action carrying the amount by which to increment.
         */
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Default export of the counter reducer produced by this slice
export default counterSlice.reducer;
