import { createAction } from "@reduxjs/toolkit";

export const gettingBalance = createAction("wallet/balance");

export const gettingCurrencyRatesStart = createAction("wallet/currencyRequest");
export const gettingCurrencyRateSuccess = createAction(
  "wallet/currencySuccess"
);
export const gettingCurrencyRateError = createAction("wallet/currencyError");

export const requestAllTransactions = createAction("allTansactions/request");
export const successAllTransactions = createAction("allTansactions/success");
export const errorAllTransactions = createAction("allTansactions/error");

export const requestCategories = createAction("categories/request");
export const successCategories = createAction("categories/success");
export const errorCategories = createAction("categories/error");
