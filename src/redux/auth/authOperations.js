import axios from "axios";
import {logoutRequest, logoutSuccess, logoutError} from './authActions.js';
import {logoutApi} from '../../utils/API/walletAPI.js';

const token = {
  set(tokenValue) {
    axios.defaults.headers.common.Authorization = `Bearer ${tokenValue}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const logout = () => dispatch => {
  dispatch(logoutRequest());

  logoutApi
    .then(() => {
      token.unset();
      dispatch(logoutSuccess());
    })
    .catch(error => dispatch(logoutError(error)));
};

export default {logout};
