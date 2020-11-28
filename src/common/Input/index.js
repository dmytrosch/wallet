import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ type, error, className, ...props }) => {
  return (
    <label className={classNames(styles[className])}>
      <input
        type={type}
        className={classNames(
          styles.input,
          styles[type],
          error && styles.inputError
        )}
        {...props}
      />
    </label>
  );
};

Input.proprTypes = {
  error: PropTypes.bool,
};

Input.defaultProps = {
  error: false,
};

export default Input;
