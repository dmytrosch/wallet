import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { notificationActions } from "./";

const type = createReducer({
  [notificationActions._]: (state) => state,
});
const message = createReducer({
  [notificationActions._]: (state) => state,
});

const notificationReducer = combineReducers({
  type,
  message,
});

export default notificationReducer;
