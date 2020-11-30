import { createReducer } from "@reduxjs/toolkit";
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  logInRequest,
  logInSuccess,
  logInError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} from "../auth/authActions";
import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  requestAllTransactions,
  successAllTransactions,
  errorAllTransactions,
} from "../wallet/walletActions";

const loadingReducer = createReducer(false, {
  [signUpRequest]: () => true,
  [logInRequest]: () => true,
  [getCurrentUserRequest]: () => true,
  [logoutRequest]: () => true,
  [addTransactionRequest]: () => true,
  [requestAllTransactions]: () => true,
  [successAllTransactions]: () => false,
  [errorAllTransactions]: () => false,
  [addTransactionSuccess]: () => false,
  [addTransactionError]: () => false,
  [signUpSuccess]: () => false,
  [signUpError]: () => false,
  [logInSuccess]: () => false,
  [logInError]: () => false,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
});

export default loadingReducer;
