import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { logoutSuccess } from "./authActions";

const user = createReducer({},{
  [logoutSuccess]: (state, action) => ({}),
});
const token = createReducer('',{
  [logoutSuccess]: (state, action) => "",
});

const authReducer = combineReducers({
  user,
  token,
});

export default authReducer;
