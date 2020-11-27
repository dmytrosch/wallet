import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Checkbox.module.css";

const Checkbox = () => {
  const [isOn, setOn] = useState(false);

  return (
    <label className={styles.label}>
      <input
        checked={isOn}
        onChange={() => setOn(!isOn)}
        className={styles.checkbox}
        type="checkbox"
      />
      <span className={classNames(styles.button, isOn && styles.active)} />
    </label>
  );
};

export default Checkbox;
