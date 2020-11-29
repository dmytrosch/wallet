import axios from "axios";

import {
  logoutRequest,
  logoutSuccess,
  logoutError,
  signUpRequest,
  signUpSuccess,
  signUpError,
  logInRequest,
  logInSuccess,
  logInError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./authActions";
import {
  createUser,
  loginUser,
  logoutApi,
  getCurrentUserApi,
} from "../../utils/API/walletAPI";
import { makeAlertNotification } from "../notifications/notificationOperations";
import { getCurrency } from "../wallet/walletOperation";

const token = {
  set(tokenValue) {
    axios.defaults.headers.common.Authorization = `Bearer ${tokenValue}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const logout = () => (dispatch) => {
  dispatch(logoutRequest());

  logoutApi()
    .then(() => {
      token.unset();
      dispatch(logoutSuccess());
    })
    .catch((error) => dispatch(logoutError(error)));
};

export const signUp = (credentials) => (dispatch) => {
  dispatch(signUpRequest());
  createUser(credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(signUpSuccess(response.data));
    })
    .catch((error) => {
      switch (error.response.status) {
        case 400:
          dispatch(
            makeAlertNotification("Что-то пошло не так. Введите данные заново")
          );
          break;
        case 409:
          dispatch(
            makeAlertNotification(
              "Пользователь с данной почтой уже зарегистрирован"
            )
          );
          break;
        default:
          dispatch(
            makeAlertNotification("Что-то пошло не так. Попробуйте позже")
          );
          break;
      }
      dispatch(signUpError(error));
    });
};
export const logIn = (credentials) => (dispatch) => {
  dispatch(logInRequest());
  loginUser(credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(logInSuccess(response.data));
      dispatch(getCurrency());
    })
    .catch((error) => {
      switch (error.response.status) {
        case 400:
          dispatch(
            makeAlertNotification("Что-то пошло не так. Введите данные заново")
          );
          break;
        case 403:
          dispatch(
            makeAlertNotification("Неправильный пароль! Попробуйте снова")
          );
          break;
        case 404:
          dispatch(
            makeAlertNotification(
              "Пользователя с данной почтой не найдено. Попробуйте снова"
            )
          );
          break;
        default:
          dispatch(
            makeAlertNotification("Что-то пошло не так. Попробуйте позже")
          );
          break;
      }
      dispatch(logInError(error));
    });
};
export const getCurrentUser = () => (dispatch, getState) => {
  const persistedToken = getState().auth.token
  console.log(persistedToken);
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  getCurrentUserApi()
    .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
    .catch((error) => {
      switch (error.response.status) {
        case 401:
          dispatch(makeAlertNotification("Войдите заново"));
          token.unset();
          break;
        default:
          break;
      }
      dispatch(getCurrentUserError());
    });
};
