import axios from "axios";
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  logInRequest,
  logInSuccess,
  logInError,
} from "./authActions";
import { createUser, loginUser } from "../../utils/API/walletAPI";
import { makeAlertNotification } from "../notifications/notificationOperations";

const token = {
  set(tokenValue) {
    axios.defaults.headers.common.Authorization = `Bearer ${tokenValue}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
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
