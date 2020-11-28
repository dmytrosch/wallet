import { createAction } from "@reduxjs/toolkit";

export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const logoutError = createAction('auth/logoutError');


const signUpRequest = createAction("auth/signUpRequest");
const signUpSuccess = createAction("auth/signUpSuccess");
const signUpError = createAction("auth/signUpError");

const logInRequest = createAction("auth/logInRequest");
const logInSuccess = createAction("auth/logInSuccess");
const logInError = createAction("auth/logInError");


export {
  signUpRequest,
  signUpSuccess,
  signUpError,
  logInRequest,
  logInSuccess,
  logInError
};
