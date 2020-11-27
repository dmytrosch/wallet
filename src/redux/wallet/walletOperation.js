import { fetchCurrency } from "../../utils/API/currencyAPI";
import {
  gettingCurrencyRatesStart,
  gettingCurrencyRateSuccess,
  gettingCurrencyRateError,
} from "./walletActions";

export const getCurrency = () => (dispatch) => {
  dispatch(gettingCurrencyRatesStart());
  const fetchCurrencyPromise = fetchCurrency();

  fetchCurrencyPromise
    .then((response) => dispatch(gettingCurrencyRateSuccess(response.data)))
    .catch((error) => dispatch(gettingCurrencyRateError(error)));
};
