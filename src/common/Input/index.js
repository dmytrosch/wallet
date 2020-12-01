import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

<<<<<<< HEAD
const Input = ({ type, error, inputClassNames, labelClassNames, ...props }) => {
  return (
    <label className={classNames(styles[type], ...[labelClassNames])}>
=======
const Input = ({ name, type, error, inputClassNames, ...props }) => {
  return (
    <div className={styles.container}>
    <label className={classNames(styles[type], styles[name])}>
>>>>>>> 93d176a8b7ff334f4876eac550621dc7a0d56ce2
      <input
        type={type}
        className={classNames(
          styles.input,
          styles[type],
          inputClassNames,
          error && styles.inputError
        )}
        {...props}
      />
    </label>
    </div>
  );
};

Input.proprTypes = {
  error: PropTypes.bool,
};

Input.defaultProps = {
  error: false,
};

export default Input;
