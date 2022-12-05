import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    newUsers: [],
    isFetching: false,
    error: false,
    usersStats: {},
  },
  reducers: {
    getUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.users = action.payload;
    },
    getUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((user) => user._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users[
        state.users.findIndex((user) => user._id === action.payload.id)
      ] = action.payload.user;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getUsersStatsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUsersStatsSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.usersStats = action.payload;
    },
    getUsersStatsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    usersClear: (state) => {
      state.users = [];
      state.isFetching = false;
      state.error = false;
      state.usersStats = {};
    },
    getNewUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getNewUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.newUsers = action.payload;
    },
    getNewUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  getUsersStatsStart,
  getUsersStatsSuccess,
  getUsersStatsFailure,
  usersClear,
  getNewUsersStart,
  getNewUsersSuccess,
  getNewUsersFailure,
} = usersSlice.actions;

export default usersSlice.reducer;
