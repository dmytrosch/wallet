import React from "react";
import classNames from "classnames";
import styles from "./Input.module.css";

const Input = ({ type, className, ...props }) => {
  return (
    <label className={classNames(styles[className])}>
      <input
        type={type}
        className={classNames(styles.input, styles[type])}
        {...props}
      />
    </label>
  );
};

export default Input;
