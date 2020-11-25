import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { walletActions } from "./";

const transactions = createReducer({
  [walletActions._]: (state) => state,
});
const categories = createReducer({
  [walletActions._]: (state) => state,
});
const balance = createReducer({
  [walletActions._]: (state) => state,
});
const currencyRates = createReducer({
  [walletActions._]: (state) => state,
});

const walletReducer = combineReducers({
  transactions,
  categories,
  balance,
  currencyRates,
});

export default walletReducer;
