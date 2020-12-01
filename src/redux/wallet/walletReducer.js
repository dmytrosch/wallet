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
import { logoutSuccess } from "../auth/authActions";

const addTransaction = (state, action) => {
  return [action.payload, ...state];
  // return action.payload; // Возможно это правильный вариант, если в транзакциях будут дубли
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
  [getCurrentUserSuccess]: (_, { payload }) => payload.balance,
  [addTransactionSuccess]: (_, { payload }) => payload.balanceAfter,
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
