import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const type = createReducer();
const message = createReducer();

const notificationReducer = combineReducers({
  type,
  message,
});

export default notificationReducer