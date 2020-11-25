import { createReducer } from "@reduxjs/toolkit";
import { loadingAction } from "./";

const loadingReducer = createReducer({
  [loadingAction._]: (state) => state,
});

export default loadingReducer;
