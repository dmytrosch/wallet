import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
} from "./walletActions";


import { addTransactionApi } from "../../utils/API/walletAPI";

const addTransaction = (transaction) => (dispatch) => {
  dispatch(addTransactionRequest());

  addTransactionApi(transaction)
    .then((resp) => dispatch(addTransactionSuccess(resp.data)))
    .catch((error) => dispatch(addTransactionError(error)));
};

export default {
  addTransaction,
};
