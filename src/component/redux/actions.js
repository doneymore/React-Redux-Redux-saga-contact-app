import * as types from "./actionTypes";

export const loadusersStart = () => ({
  type: types.Load_USERS_START,
});

export const loaduserSuccess = (users) => ({
  type: types.Load_USERS_SUCCESS,
  payload: users,
});

export const loaduserError = (error) => ({
  type: types.Load_USERS_ERROR,
  payload: error,
});

export const createuserStart = (user) => ({
  type: types.CREATE_USER_START,
  payload: user,
});

export const createuserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});

export const createuserError = (error) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});

export const deleteUserStart = (userId) => ({
  type: types.DELETE_USER_START,
  payload: userId,
});

export const deleteUserSuccess = (userId) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: userId,
});

export const deleteUserError = (error) => ({
  type: types.DELETE_USER_ERROR,
  payload: error,
});

export const updateUserStart = (userInfo) => ({
  type: types.UPDATE_USER_START,
  payload: userInfo,
});

export const updateUserSuccess = () => ({
  type: types.UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: error,
});
