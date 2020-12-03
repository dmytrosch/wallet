import React from "react";
import classNames from "classnames";
import styles from "./Checkbox.module.css";

const Checkbox = ({ isOn, ...props }) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.checkbox}
        type="checkbox"
        {...props}
      />
      <span className={classNames(styles.button, isOn && styles.active)} />
    </label>
  );
};

export default Checkbox;
