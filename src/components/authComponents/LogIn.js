import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOperations";
import styles from "./styles.module.css";
import Input from "../../common/Input/";
import Button from "../../common/Button";
import { makeAlertNotification } from "../../redux/notifications/notificationOperations";
import validator from "validator";
import logoSvg from "../../assets/icons/WalletImg.svg";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      dispatch(makeAlertNotification("Введите корректный email!"));
      return;
    }
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logoSvg} alt="#" />
        <h1 className={styles.title}>Wallet</h1>
      </div>
      <form className={styles.form} onSubmit={handlerSubmit}>
        <div className={styles.inputWrapper}>
        <Input
          type="email"
          value={email}
          onChange={updateEmail}
          error={email.length > 0 && !validator.isEmail(email)}
          placeholder="E-mail"
        />
        </div>
        <div className={styles.inputWrapper}>
        <Input
          type="password"
          value={password}
          onChange={updatePassword}
          placeholder="Пароль"
        />
        </div>
        <Button type="submit">вход</Button>
        <Button type="submit">регистрация</Button>
      </form>
    </div>
  );
}
