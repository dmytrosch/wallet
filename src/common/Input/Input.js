import React from "react";
import classNames from "classnames";
import styles from "./Input.module.css";

const Input = ({ type, value, className, ...props }) => {
  return (
    <label className={classNames(styles[className])}>
      <input
        value={value}
        type={type}
        className={classNames(styles.input, styles[type])}
        {...props}
      />
    </label>
  );
};

export default Input;
