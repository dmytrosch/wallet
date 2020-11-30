import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  signUpSuccess,
  logInSuccess,
  logoutSuccess,
  getCurrentUserSuccess,
  removeUnauthorizedUser,
} from "./authActions";

const user = createReducer(
  {},
  {
    [signUpSuccess]: (_, { payload }) => payload.user,
    [logInSuccess]: (_, { payload }) => payload.user,
    [getCurrentUserSuccess]: (_, { payload }) => payload,
    [logoutSuccess]: () => ({}),
    [removeUnauthorizedUser]: () => ({}),
  }
);
const token = createReducer(null, {
  [signUpSuccess]: (_, { payload }) => payload.token,
  [logInSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
  [removeUnauthorizedUser]: null,
});

export default combineReducers({
  user,
  token,
});