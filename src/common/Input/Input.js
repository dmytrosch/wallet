import React from "react";
import classNames from "classnames";
import styles from "./Input.module.css";

const Input = ({ type, className, ...props }) => {
  return (
    <label className={classNames(styles[type])}>
      <input
        type={type}
        className={classNames(styles.input, className)}
        {...props}
      />
    </label>
  );
};

export default Input;
