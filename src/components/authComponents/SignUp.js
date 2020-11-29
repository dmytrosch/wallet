import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/authOperations";
import Input from "../../common/Input/";
import styles from "./styles.module.css";
import PasswordStrengthBar from "react-password-strength-bar";

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
    dispatch(signUp({ username: name, email, password }));
    setEmail("");
    setPassword("");
    setConfirmedPasswod("");
    setName("");
  };

  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
      <Input
        type="email"
        value={email}
        onChange={updateEmail}
        required
      />
      <br />
      <br />
      <Input
        type="password"
        value={password}
        onChange={updatePassword}
        required
      />
      <br />
      <PasswordStrengthBar password={password} />
      <br />
      <Input
        className={styles.input}
        type="password"
        value={confirmedPassword}
        onChange={updateConfirmedPassword}
        required
      />
      <br />
      <br />
      <Input
        className={styles.input}
        type="text"
        value={name}
        onChange={updateName}
        required
      />
      <br />
      <br />
      <button type="submit" className={styles.button}>
        SignUp
      </button>
    </form>
  );
}
