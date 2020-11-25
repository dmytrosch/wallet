import { createReducer } from "@reduxjs/toolkit";
import { _2 } from './loadingAction';

const loadingReducer = createReducer(null, {
  [_2]: (state) => state,
});

export default loadingReducer;
