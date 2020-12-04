import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOperations";
import styles from "./styles.module.css";
import Input from "../../common/Input/";
import Button from "../../common/Button";
import { makeAlertNotification } from "../../redux/notifications/notificationOperations";
import validator from "validator";
import logoSvg from "../../assets/icons/WalletImg.svg";
import {NavLink} from 'react-router-dom';


export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          onChange={(e) => setEmail(e.target.value)}
          error={email.length > 0 && !validator.isEmail(email)}
          placeholder="E-mail"
        />
        </div>
        <div className={styles.inputWrapper}>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        </div>
        <Button color="green" type="submit">вход</Button>
        <NavLink to="/signup">
      <Button type="submit">регистрация</Button>
      </NavLink>
      </form>
      
    </div>
  );
}
