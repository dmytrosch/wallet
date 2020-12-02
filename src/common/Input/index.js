import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ type, error, inputClassNames, ...props }) => {
  return (
    <label className={classNames(styles[type], styles[props.name])}>
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