import { createSelector } from "@reduxjs/toolkit";
// тут я беру все валюты, округляю до десятых, создаю новый масив объектов.
// фильтрую его от лишнего. Получилась онлайн курс валют от приватбанка.
export const getCurrencyRate = (state) => state.wallet.currencyRates;
const round = (state) => {
  return getCurrencyRate(state).map((item) => {
    const buy = Math.ceil(item.buy * 100) / 100;
    const sale = Math.ceil(item.sale * 100) / 100;
    const ccy = item.ccy;
    const roundCurrency = { ccy, buy, sale };
    return roundCurrency;
  });
};
export const getCurrencyRateFiltered = createSelector([round], (items) => {
  return items.filter((item) => item.ccy !== "BTC");
});
