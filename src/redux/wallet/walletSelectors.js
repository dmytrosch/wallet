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
export const getBalance = (state) => state.wallet.balance;

export const getCategories = (state) => state.wallet.categories;
export const transactions = (state) => state.wallet.transactions;

export const getAllTransactions = createSelector(
  [transactions, getCategories],
  (transactions, categories) =>
    transactions.map((item) => ({
      ...item,
      category: categories.find((_) => _.id === item.categoryId).name,
    }))
);
