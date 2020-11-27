import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { _4, addTransactionSuccess } from "./walletActions";


const addTransaction = (state, action) => {
  return [action.payload, ...state];
  // return action.payload; // Возможно это правильный вариант, если в транзакциях будут дубли

}


const transactions = createReducer([], {
  [addTransactionSuccess]: addTransaction
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
