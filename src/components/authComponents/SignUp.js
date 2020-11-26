import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signUp} from '../../redux/auth/authOperations';
import styles from './styles.css';



export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPasswod] = useState('');
    const [name, setName] = useState('');

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
        dispatch(signUp({username: name,email, password }));
        setEmail('');
        setPassword('');
        setConfirmedPasswod('');
        setName('');
    }


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
              required
            />
          </label>
          <br/>
          <br/>
          <label className={styles.label}>
            Password
            <input
            className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={updatePassword}
              required
            />
          </label>
          <br/>
          <br/>
          <label className={styles.label}>
            Confirm Password
            <input
            className={styles.input}
              type="password"
              name="password"
              value={confirmedPassword}
              onChange={updateConfirmedPassword}
              required
            />
          </label>
          <br/>
          <br/>
          <label className={styles.label}>
            Name
            <input
            className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={updateName}
              required
            />
          </label>
          <br/>
          <br/>
          <button type="submit" className={styles.button}>SignUp</button>
        </form>
    )
}