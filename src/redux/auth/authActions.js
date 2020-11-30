import { createAction } from "@reduxjs/toolkit";

const logoutRequest = createAction("auth/logoutRequest");
const logoutSuccess = createAction("auth/logoutSuccess");
const logoutError = createAction("auth/logoutError");

const signUpRequest = createAction("auth/signUpRequest");
const signUpSuccess = createAction("auth/signUpSuccess");
const signUpError = createAction("auth/signUpError");

const logInRequest = createAction("auth/logInRequest");
const logInSuccess = createAction("auth/logInSuccess");
const logInError = createAction("auth/logInError");

const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
const getCurrentUserError = createAction("auth/getCurrentUserError");

const removeUnauthorizedUser = createAction("auth/removeUnauthorizedUser");

export {
  signUpRequest,
  signUpSuccess,
  signUpError,
  logInRequest,
  logInSuccess,
  logInError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  removeUnauthorizedUser,
  logoutRequest,
  logoutSuccess,
  logoutError,
};
