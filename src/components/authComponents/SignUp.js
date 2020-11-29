import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/authOperations";
import styles from "./styles.css";
import PasswordStrengthBar from 'react-password-strength-bar';
import {makeAlertNotification} from '../../redux/notifications/notificationOperations';
// import validator from 'validator';


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
    const elements = e.target.elements;
    console.log(elements)

    if(password.length < 8) {
      dispatch(makeAlertNotification('Введите пароль не менее 8 символов!'));
      return
    }
    if(confirmedPassword !== password){
      dispatch(makeAlertNotification('Не совпадает пароль!'));
      return
    }
    dispatch(signUp({ username: name, email, password }));
    setEmail("");
    setPassword("");
    setConfirmedPasswod("");
    setName("");
  };
  

  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          name="email"
          value={email}
          onChange={updateEmail}
        />
      </label>
      <br />
      <br />
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          onChange={updatePassword}
          
        />
      </label>
      <br />
      <PasswordStrengthBar password={password} />
      <br />
      <label className={styles.label}>
        Confirm Password
        <input
          className={styles.input}
          type="password"
          name="password"
          value={confirmedPassword}
          onChange={updateConfirmedPassword}
          
        />
      </label>
      <br />
      <br />
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={updateName}
          
        />
      </label>
      <br />
      <br />
      <button type="submit" className={styles.button}>
        SignUp
      </button>
    </form>
  );
}
