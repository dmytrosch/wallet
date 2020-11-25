import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const user = createReducer();
const token = createReducer();

const authReducer = combineReducers({
  user,
  token,
});

export default authReducer