import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

//createSlice is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //reducers are functions that take the current state and an action as arguments, and return a new state result.
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
