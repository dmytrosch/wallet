import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authActions } from "./index";

const user = createReducer({
  [authActions._]: (state, action) => state,
});
const token = createReducer({
  [authActions._]: (state, action) => state,
});

const authReducer = combineReducers({
  user,
  token,
});

export default authReducer;
