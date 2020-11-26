import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Checkbox.module.css";

const Checkbox = () => {
  const [isOn, setOn] = useState(false);

  return (
    <label className={styles.label} htmlFor="react-switch-new">
      <input
        checked={isOn}
        onChange={() => setOn(!isOn)}
        className={styles.checkbox}
        id="react-switch-new"
        type="checkbox"
      />
      <span className={classNames(styles.button, isOn && styles.active)} />
    </label>
  );
};

export default Checkbox;
