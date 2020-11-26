import { createAction } from "@reduxjs/toolkit";

const SignUpRequest = createAction("auth/SignUpRequest");
const SignUpSuccess = createAction("auth/SignUpSuccess");
const SignUprError = createAction("auth/SignUpError");

const logInRequest = createAction("auth/logInRequest");
const logInSuccess = createAction("auth/logInSuccess");
const logInError = createAction("auth/logInError");


export default {
  SignUpRequest,
  SignUpSuccess,
  SignUprError,
  logInRequest,
  logInSuccess,
  logInError
};
