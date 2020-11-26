import { createAction } from "@reduxjs/toolkit";

export const _4 = createAction("temporary action");

export const balance = createAction("wallet/balance");

export const currencyRateRequest = createAction("wallet/currencyRequest");
export const currencyRateSuccess = createAction("wallet/currencySuccess");
export const currencyRateError = createAction("wallet/currencyError");
