import React from "react";
import classNames from "classnames";
import styles from "./Input.module.css";

const Input = ({ type, labelClassName, inputClassNames, ...props }) => {

  return (
    <label className={classNames(styles[labelClassName])}>
      <input
        type={type}
        className={classNames(styles.input, styles[type], ...[inputClassNames])}
        {...props}
      />
    </label>
  );
};

export default Input;
