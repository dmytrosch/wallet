import { fetchCurrency } from "../../utils/API/currencyAPI";
import { loadTransactions, loadCategories } from "../../utils/API/walletAPI";
import { makeAlertNotification } from "../notifications/notificationOperations";
import {
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

export const getCurrency = () => (dispatch) => {
  dispatch(gettingCurrencyRatesStart());
  fetchCurrency()
    .then((response) => dispatch(gettingCurrencyRateSuccess(response.data)))
    .catch((error) => dispatch(gettingCurrencyRateError(error)));
};

export const getTransactions = () => (dispatch) => {
  dispatch(requestAllTransactions());
  loadTransactions()
    .then((response) => {
      dispatch(successAllTransactions(response.data));
    })
    .catch((error) => {
      const message = getTransactionsErrorHandler(error.response.status);
      dispatch(makeAlertNotification(message));
      dispatch(errorAllTransactions());
    });
};

export const getCategories = () => (dispatch) => {
  dispatch(requestCategories());
  loadCategories()
    .then((response) => dispatch(successCategories(response.data)))
    .catch((error) => dispatch(errorCategories()));
};
