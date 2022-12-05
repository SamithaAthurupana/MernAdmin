import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
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
} from "./usersRedux";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
  getProductStatsStart,
  getProductStatsSuccess,
  getProductStatsFailure,
} from "./productRedux";
import {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  getOrdersStatsStart,
  getOrdersStatsSuccess,
  getOrdersStatsFailure,
} from "./orderRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getAllUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

// export const getNewUsers = async (dispatch) => {
//   dispatch(getNewUsersStart());
//   try {
//     const res = userRequest.get("users?new=true");
//     console.log("new users", res.data);
//     // dispatch(getNewUsersSuccess(res.data));
//   } catch (err) {
//     dispatch(getNewUsersFailure());
//   }
// };

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    // const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateUser = async (
  dispatch,
  { userId, username, fullname, email, phone, address }
) => {
  dispatch(updateUserStart());
  try {
    // update
    const res = await userRequest.put(`/users/${userId}`, {
      username,
      fullname,
      email,
      phone,
      address,
    });
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

export const getOrders = async (dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await userRequest.get("/orders");
    dispatch(getOrderSuccess(res.data));
  } catch (err) {
    dispatch(getOrderFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await userRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

// export const updateProduct = async (dispatch, id, product) => {
//   dispatch(updateProductStart());
//   try {
//     // update
//     const res = await userRequest.put(`/products/${id}`);
//     console.log(res);
//     // dispatch(updateProductSuccess({ id, product }));
//   } catch (err) {
//     dispatch(updateProductFailure());
//   }
// };

export const updateProduct = async (
  dispatch,
  { productId, title, desc, price, inStock }
) => {
  dispatch(updateProductStart());
  try {
    // update
    const res = await userRequest.put(`/products/${productId}`, {
      title,
      desc,
      price,
      inStock,
    });
    dispatch(updateProductSuccess(res.data));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const getUsersStats = async (dispatch) => {
  dispatch(getUsersStatsStart());
  try {
    const res = await userRequest.get("/users/stats");
    dispatch(getUsersStatsSuccess(res.data));
  } catch (err) {
    dispatch(getUsersStatsFailure());
  }
};

export const getOrdersStats = async (dispatch) => {
  dispatch(getOrdersStatsStart());
  try {
    const res = await userRequest.get("/orders/stats");
    dispatch(getOrdersStatsSuccess(res.data));
  } catch (err) {
    dispatch(getOrdersStatsFailure());
  }
};

export const getProductStats = async (dispatch, productId) => {
  dispatch(getProductStatsStart());
  try {
    const res = await userRequest.get(`/orders/stats/${productId}`);
    dispatch(getProductStatsSuccess(res.data));
  } catch (err) {
    dispatch(getProductStatsFailure());
  }
};

// export const logout = (dispatch) => {
//   dispatch(ordersClear);
//   dispatch(productsClear);
//   dispatch(usersClear);
//   dispatch(userClear);
// };

// export const logout = () => {
//   localStorage.removeItem("persist:root");
// };
