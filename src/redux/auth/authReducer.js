import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  logInRequest,
  logInSuccess,
  logInError,
} from "./authActions";

const user = createReducer(
  {},
  {
    [signUpSuccess]: (_, { payload }) => payload.user,
    [logInSuccess]: (_, { payload }) => payload.user,
  }
);
const token = createReducer(null, {
  [signUpSuccess]: (_, { payload }) => payload.token,
  [logInSuccess]: (_, { payload }) => payload.token,
});

export default combineReducers({
  user,
  token,
});