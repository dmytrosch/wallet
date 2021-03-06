import { createSelector } from "@reduxjs/toolkit";

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
export const getBalance = (state) => state.wallet.balance;
export const getCategories = (state) => state.wallet.categories;
export const transactions = (state) => state.wallet.transactions;
export const getAllTransactions = createSelector(
  [transactions, getCategories],
  (transactions, categories) =>
    transactions
      .map((item) => {
        const category = categories.find((_) => _.id === item.categoryId);
        return {
          ...item,
          category: category ? category.name : "",
        };
      })
      .sort((a, b) => {
        const A = new Date(a.transactionDate);
        const B = new Date(b.transactionDate);
        return A > B ? -1 : +1;
      })
);

export const dropdownIncomeCategoriesSelector = (state) =>
  state.wallet.categories
    .filter((category) => category.type === "INCOME")
    .filter(category => category.name !== 'test income')
    .map((category) => {
      return {
        key: category.id,
        text: category.name,
        value: category.name,
        type: category.type,
      };
    });
export const dropdownExpenseCategoriesSelector = (state) =>
  state.wallet.categories
    .filter((category) => category.type === "EXPENSE")
    .filter(category => category.name !== 'test expense')
    .map((category) => {
      return {
        key: category.id,
        text: category.name,
        value: category.name,
        type: category.type,
      };
    });
