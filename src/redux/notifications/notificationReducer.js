import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { _3 } from "./notificationActions";

const type = createReducer("", {
  [_3]: (state) => state,
});
const message = createReducer("", {
  [_3]: (state) => state,
});

const notificationReducer = combineReducers({
  type,
  message,
});

export default notificationReducer;
