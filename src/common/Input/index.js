import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ name, type, error, inputClassNames, ...props }) => {
  return (
    <label className={classNames(styles[type], styles[name])}>
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
  );
};

Input.proprTypes = {
  error: PropTypes.bool,
};

Input.defaultProps = {
  error: false,
};

export default Input;
