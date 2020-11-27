import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  gettingCurrencyRatesStart,
  gettingCurrencyRateSuccess,
  gettingCurrencyRateError,
  gettingBalance,
} from "./walletActions";

// const transactions = createReducer([], {
//   [_4]: (state) => state,
// });
// const categories = createReducer([], {
//   [_4]: (state) => state,
// });
const balance = createReducer(24573.12, {
  [gettingBalance]: (_, { payload }) => payload,
});

const currencyRates = createReducer([], {
  [gettingCurrencyRatesStart]: (_, { payload }) => payload,
  [gettingCurrencyRateSuccess]: (_, { payload }) => payload,
});

const walletReducer = combineReducers({
  // transactions,
  // categories,
  balance,
  currencyRates,
});

export default walletReducer;
