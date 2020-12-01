import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  addTransactionSuccess,
  gettingCurrencyRatesStart,
  gettingCurrencyRateSuccess,
  successAllTransactions,
  successCategories,
} from "./walletActions";

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
// const balance = createReducer(2457.13, {
//   [gettingBalance]: (_, { payload }) => payload,
// });
//gettingbalance убрать

const currencyRates = createReducer([], {
  [gettingCurrencyRatesStart]: (_, { payload }) => payload, /**Зачем это? надо бы удалить...*/
  [gettingCurrencyRateSuccess]: (_, { payload }) => payload,
});

const walletReducer = combineReducers({
  transactions,
  categories,
  // balance,
  currencyRates,
});

export default walletReducer;
