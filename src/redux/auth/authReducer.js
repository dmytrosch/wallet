import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  logInRequest,
  logInSuccess,
  logInError,
  logoutSuccess,
  getCurrentUserSuccess
} from "./authActions";

const user = createReducer(
  {},
  {
    [signUpSuccess]: (_, { payload }) => payload.user,
    [logInSuccess]: (_, { payload }) => payload.user,
    [getCurrentUserSuccess]: (_, { payload }) => payload,
    [logoutSuccess]: () => ({}),
  }
);
const token = createReducer(null, {
  [signUpSuccess]: (_, { payload }) => payload.token,
  [logInSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null
});

export default combineReducers({
  user,
  token,
});