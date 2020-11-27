import { createAction } from "@reduxjs/toolkit";

export const gettingBalance = createAction("wallet/balance");

export const gettingCurrencyRatesStart = createAction("wallet/currencyRequest");
export const gettingCurrencyRateSuccess = createAction("wallet/currencySuccess");
export const gettingCurrencyRateError = createAction("wallet/currencyError");
