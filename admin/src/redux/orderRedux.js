import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    isFetching: false,
    error: false,
    ordersStats: {},
  },
  reducers: {
    //GET ALL
    getOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    getOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getOrdersStatsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOrdersStatsSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.ordersStats = action.payload;
    },
    getOrdersStatsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    ordersClear: (state) => {
      state.orders = [];
      state.isFetching = false;
      state.error = false;
      state.ordersStats = {};
    },
  },
});

export const {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  getOrdersStatsStart,
  getOrdersStatsSuccess,
  getOrdersStatsFailure,
  ordersClear,
} = orderSlice.actions;

export default orderSlice.reducer;
