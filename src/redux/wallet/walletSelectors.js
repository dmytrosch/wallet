import { createSelector } from "@reduxjs/toolkit";
// тут я беру все валюты, округляю до десятых, создаю новый масив объектов.
// фильтрую его от лишнего. Получилась онлайн курс валют от приватбанка.
///////////////////// currency rate
export const getCurrencyRate = (state) => state.wallet.currencyRates;
const roundCurrencyRate = (state) => {
  return getCurrencyRate(state).map((item) => {
    const buy = Math.ceil(item.buy * 100) / 100;
    const sale = Math.ceil(item.sale * 100) / 100;
    const ccy = item.ccy;
    const roundCurrency = { ccy, buy, sale };
    return roundCurrency;
  });
};
export const getCurrencyRateFiltered = createSelector(
  [roundCurrencyRate],
  (items) => {
    return items.filter((item) => item.ccy !== "BTC");
  }
);
////////////////////// balance
export const getBalance = (state) => {
  const balance = state.wallet.balance;
  return balance.toFixed(2);
};
