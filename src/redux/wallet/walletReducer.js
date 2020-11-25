import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const transactions = createReducer();
const categories = createReducer();
const balance = createReducer();
const currencyRates = createReducer();

const walletReducer = combineReducers({
  transactions,
  categories,
  balance,
  currencyRates,
});

export default walletReducer;
