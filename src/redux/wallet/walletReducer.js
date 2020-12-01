import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  addTransactionSuccess,
  gettingCurrencyRatesStart,
  gettingCurrencyRateSuccess,
  gettingCurrencyRateError,
  successAllTransactions,
  successCategories,
} from "./walletActions";

const addTransaction = (state, action) => {
  return [ ...state, action.payload];
  // return action.payload; // Возможно это правильный вариант, если в транзакциях будут дубли

}




const transactions = createReducer([], {
  [successAllTransactions]: (_, { payload }) => payload,
  [addTransactionSuccess]: addTransaction,
});
const categories = createReducer([], {
  [successCategories]: (_, { payload }) => payload,
});
// const balance = createReducer(2457.13, {
//   [gettingBalance]: (_, { payload }) => payload,
// });
//gettingbalance убрать

const currencyRates = createReducer([], {
  [gettingCurrencyRatesStart]: (_, { payload }) => payload,
  [gettingCurrencyRateSuccess]: (_, { payload }) => payload,
});

const walletReducer = combineReducers({
  transactions,
  categories,
  // balance,
  currencyRates,
});

export default walletReducer;
