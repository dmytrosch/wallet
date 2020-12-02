import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  addTransactionSuccess,
  gettingCurrencyRatesStart,
  gettingCurrencyRateSuccess,
  successAllTransactions,
  successCategories,
} from "./walletActions";

import { getCurrentUserSuccess } from "../auth/authActions";
import { logoutSuccess, logInSuccess } from "../auth/authActions";

const addTransaction = (state, action) => {
  return [action.payload, ...state];
};

const transactions = createReducer([], {
  [successAllTransactions]: (_, { payload }) => payload,
  [addTransactionSuccess]: addTransaction,
  [logoutSuccess]: [],
});
const categories = createReducer([], {
  [successCategories]: (_, { payload }) => payload,
});
const balance = createReducer(0, {
  [getCurrentUserSuccess]: (_, { payload }) =>
    Number(payload.balance).toFixed(2),
  [addTransactionSuccess]: (_, { payload }) =>
    Number(payload.balanceAfter).toFixed(2),
  [logInSuccess]: (_, { payload }) =>
    Number(payload.user.balance).toFixed(2),
});

const currencyRates = createReducer([], {
  [gettingCurrencyRateSuccess]: (_, { payload }) => payload,
});

const walletReducer = combineReducers({
  transactions,
  categories,
  balance,
  currencyRates,
});

export default walletReducer;
