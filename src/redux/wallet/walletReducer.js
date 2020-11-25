import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { _4 } from "./walletActions";

const transactions = createReducer([], {
  [_4]: (state) => state,
});
const categories = createReducer([], {
  [_4]: (state) => state,
});
const balance = createReducer(null, {
  [_4]: (state) => state,
});
const currencyRates = createReducer([], {
  [_4]: (state) => state,
});

const walletReducer = combineReducers({
  transactions,
  categories,
  balance,
  currencyRates,
});

export default walletReducer;
