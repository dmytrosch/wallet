import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ color, shape, children, ...props }) => {
  return (
    <button
      className={classNames(styles.button, styles[color], styles[shape])}
      {...props}
    >
      {children}
    </button>
  );
};

Button.proprTypes = {
  color: PropTypes.string,
  shape: PropTypes.string,
};

Button.defaultProps = {
  color: "white",
  shape: "square",
};

export default Button;
