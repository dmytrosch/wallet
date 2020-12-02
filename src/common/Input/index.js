import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ type, error, inputClassNames, labelClassNames, ...props }) => {
  return (
<<<<<<< HEAD
    <label className={classNames(styles[type], ...[labelClassNames])}>
=======
    <label className={classNames(styles[type], styles[name])}>
>>>>>>> 5b2b78ff5890409dcab166cbd3cc09e958c67787
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
<<<<<<< HEAD

=======
>>>>>>> 5b2b78ff5890409dcab166cbd3cc09e958c67787
  );
};

Input.proprTypes = {
  error: PropTypes.bool,
};

Input.defaultProps = {
  error: false,
};

export default Input;
