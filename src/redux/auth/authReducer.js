import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { _1 } from "./authActions";

const user = createReducer({},{
  [_1]: (state, action) => state,
});
const token = createReducer('',{
  [_1]: (state, action) => state,
});

const authReducer = combineReducers({
  user,
  token,
});

export default authReducer;
