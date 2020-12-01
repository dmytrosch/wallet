import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/authOperations";
import PasswordStrengthBar from "react-password-strength-bar";
import { makeAlertNotification } from "../../redux/notifications/notificationOperations";
import validator from "validator";
import logoSvg from "../../assets/icons/WalletImg.svg";

import Input from "../../common/Input/";
import Button from "../../common/Button";
import styles from "./styles.module.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPasswod] = useState("");
  const [name, setName] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateConfirmedPassword = (e) => {
    setConfirmedPasswod(e.target.value);
  };
  const updateName = (e) => {
    setName(e.target.value);
  };
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      dispatch(makeAlertNotification("Введите корректный email!"));
      return;
    }

    if (password.length < 8) {
      dispatch(makeAlertNotification("Введите пароль не менее 8 символов!"));
      return;
    }
    if (confirmedPassword !== password) {
      dispatch(makeAlertNotification("Не совпадает пароль!"));
      return;
    }
    dispatch(signUp({ username: name, email, password }));
    setEmail("");
    setPassword("");
    setConfirmedPasswod("");
    setName("");
  };

  return (
    <div className={styles.containerSignUp}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logoSvg} alt="#" />
        <h1 className={styles.title}>Wallet</h1>
      </div>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <Input
          type="email"
          value={email}
          onChange={updateEmail}
          error={email.length > 0 && !validator.isEmail(email)}
          placeholder="E-mail"
        />
        <Input
          type="password"
          value={password}
          onChange={updatePassword}
          error={password.length > 0 && password.length < 8}
          placeholder="Пароль"
        />
        <div className={styles.passwordLengthContainer}>
          <PasswordStrengthBar
            password={password}
            minLength={8}
            scoreWords={[
              "ненадежный",
              "слабый",
              "нормальный",
              "хороший",
              "надежный",
            ]}
            shortScoreWord="слишком короткий"
          />
        </div>
        <Input
          type="password"
          value={confirmedPassword}
          onChange={updateConfirmedPassword}
          error={confirmedPassword !== password}
          placeholder="Подтвердите пароль"
        />
        <Input
          type="text"
          name="name"
          value={name}
          onChange={updateName}
          placeholder="Ваше имя"
        />
        <Button type="submit">РЕГИСТРАЦИЯ</Button>
      </form>
    </div>
  );
}
