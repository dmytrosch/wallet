import axios from "axios";
import authActions from "./authActions";
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
  dispatch(authActions.SignUpRequest());
  createUser(credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.SignUpSuccess(response.data));
    })
    .catch((error) => {
      switch (error.message) {
        case "Request failed with status code 400":
          dispatch(makeAlertNotification("Что-то пошло не так. Введите данные заново"));
          break;
        case "Request failed with status code 409":
          dispatch(makeAlertNotification(
            "Пользователь с данной почтой уже зарегистрирован"
          ));
          break;
        default:
          break;
      }
      dispatch(authActions.SignUprError(error));
    });
};
export const logIn = (credentials) => (dispatch) => {
  dispatch(authActions.logInRequest());
  loginUser(credentials)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.logInSuccess(response.data));
    })
    .catch((error) => {
      switch (error.message) {
        case "Request failed with status code 400":
          dispatch(makeAlertNotification("Что-то пошло не так. Введите данные заново"));
          break;
        case "Request failed with status code 403":
          dispatch(makeAlertNotification("Неправильный пароль! Попробуйте снова"));
          break;
        case "Request failed with status code 404":
          dispatch(makeAlertNotification(
            "Пользователя с данной почтой не найдено. Попробуйте снова"
          ));
          break;
        default:
          break;
      }
      dispatch(authActions.logInError(error));
    });
};
