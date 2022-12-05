import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
    productStats: {},
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.products = action.payload;
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getProductStatsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductStatsSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.productStats = action.payload;
    },
    getProductStatsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    productsClear: (state) => {
      state.products = [];
      state.isFetching = false;
      state.error = false;
      state.productStats = {};
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
  getProductStatsStart,
  getProductStatsSuccess,
  getProductStatsFailure,
  productsClear,
} = productSlice.actions;

export default productSlice.reducer;
