import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  currencyRateRequest,
  currencyRateSuccess,
  currencyRateError,
} from "./walletActions";

// const transactions = createReducer([], {
//   [_4]: (state) => state,
// });
// const categories = createReducer([], {
//   [_4]: (state) => state,
// });
// const balance = createReducer(null, {
//   [_4]: (state) => state,
// });

const currencyRates = createReducer([], {
  [currencyRateSuccess]: (_, { payload }) => payload,
  [currencyRateError]: (_, { payload }) => payload,
});

const walletReducer = combineReducers({
  // transactions,
  // categories,
  // balance,
  currencyRates,
});

export default walletReducer;
