import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOperations";
import styles from "./styles.css";

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
    dispatch(logIn({email, password}));
    setEmail('');
    setPassword('');
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
      <button className={styles.button} type="submit">
        logIn
      </button>
    </form>
  );
}
