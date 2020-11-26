import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ color, shape, name, ...props }) => {
  return (
    <button
      className={classNames(styles.button, styles[color], styles[shape])}
      {...props}
    >
      <span className={color === "green" ? styles.name2 : styles.name}>
        {name}
      </span>
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
