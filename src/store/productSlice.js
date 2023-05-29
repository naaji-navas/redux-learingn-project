import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};

//createSlice is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //reducers are functions that take the current state and an action as arguments, and return a new state result.
    // fetchProducts: (state, action) => {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
      });
    // Add reducers for additional action types here, and handle loading state as needed
  },
});

export default productSlice.reducer;
export const { fetchProducts } = productSlice.actions;

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/productsssss");
    const products = await response.json();
    return products;
  }
);
// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {

//   };
// }
