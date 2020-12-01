import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  gettingCurrencyRatesStart,
  gettingCurrencyRateSuccess,
  gettingCurrencyRateError,
  requestAllTransactions,
  successAllTransactions,
  errorAllTransactions,
  requestCategories,
  successCategories,
  errorCategories,
} from "./walletActions";

import { fetchCurrency } from "../../utils/API/currencyAPI";
import { loadTransactions, loadCategories } from "../../utils/API/walletAPI";
import { makeAlertNotification } from "../notifications/notificationOperations";
import { addTransactionApi } from "../../utils/API/walletAPI";
import { pathOr } from "ramda";

const getTransactionsErrorHandler = (errCode) => {
  let message = "";
  switch (errCode) {
    case 400:
      message = "Ошибка данных";
      break;
    case 401:
      message = "Выполните перерегистрацию";
      break;
    default:
      message = "Что-то пошло не так...";
  }
  return message;
};

export const addTransaction = (transaction) => (dispatch) => {
  dispatch(addTransactionRequest());

  addTransactionApi(transaction)
    .then((resp) => dispatch(addTransactionSuccess(resp.data)))
    .catch((error) => {
      dispatch(addTransactionError(error));
      dispatch(makeAlertNotification("Ошибка добавления"));
    });
};

export const getCurrency = () => (dispatch) => {
  dispatch(gettingCurrencyRatesStart());
  fetchCurrency()
    .then((j) => j.json())
    .then((response) => dispatch(gettingCurrencyRateSuccess(response)))
    .catch((error) => dispatch(gettingCurrencyRateError(error)));
};

export const getTransactions = () => (dispatch) => {
  dispatch(requestAllTransactions());
  loadTransactions()
    .then((response) => {
      dispatch(successAllTransactions(response.data));
    })
    .catch((error) => {
      const message = getTransactionsErrorHandler(pathOr("", ["response", "status"], error));
      dispatch(makeAlertNotification(message));
      dispatch(errorAllTransactions());
    });
};

export const getCategories = () => (dispatch) => {
  dispatch(requestCategories());
  loadCategories()
    .then((response) => dispatch(successCategories(response.data)))
    .catch((error) => dispatch(errorCategories(error)));
};
