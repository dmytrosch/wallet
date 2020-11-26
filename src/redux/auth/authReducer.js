import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "./authActions";

const user = createReducer(
  {},
  {
    [authActions.SignUpSuccess]: (_, { payload }) => payload.user,
    [authActions.logInSuccess]: (_, { payload }) => payload.user,
  }
);
const token = createReducer(null, {
  [authActions.SignUpSuccess]: (_, { payload }) => payload.token,
  [authActions.logInSuccess]: (_, { payload }) => payload.token,
});


export default combineReducers({
  user,
  token,
});

// const authReducer = combineReducers({
//   user,
//   token,
// });

// export default authReducer;
