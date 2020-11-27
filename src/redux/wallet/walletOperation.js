import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
} from "./walletActions";


import { makeAlertNotification } from "../notifications/notificationOperations"


import { addTransactionApi } from "../../utils/API/walletAPI";
import { findRenderedComponentWithType } from "react-dom/test-utils";

const addTransaction = (transaction) => (dispatch) => {
  dispatch(addTransactionRequest());

  addTransactionApi(transaction)
    .then((resp) => dispatch(addTransactionSuccess(resp.data)))
    .catch((error) => {
      dispatch(addTransactionError(error))
      dispatch(makeAlertNotification("Ошибка добавления"))
    });
};

export default {
  addTransaction,
};
