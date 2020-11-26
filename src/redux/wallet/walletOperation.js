import axios from "axios";
import { fetchCurrency } from "../../utils/API/currencyAPI";
import {
  currencyRateRequest,
  currencyRateSuccess,
  currencyRateError,
} from "./walletActions";

export const getCurrency = () => (dispatch) => {
  dispatch(currencyRateRequest());
  const fetchCurrencyPromise = fetchCurrency();

  fetchCurrencyPromise
    .then((response) => dispatch(currencyRateSuccess(response.data)))
    .catch((error) => dispatch(currencyRateError(error)));
};
