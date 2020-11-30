import React from "react";
import classNames from "classnames";
import styles from "./Checkbox.module.css";

const Checkbox = ({ isOn, ...props }) => {
  // const [isOn, setOn] = useState(false);

  return (
    <label className={styles.label}>
      <input
        // onChange={() => setOn(!isOn)}
        // checked={isOn}
        className={styles.checkbox}
        type="checkbox"
        {...props}
      />
      <span className={classNames(styles.button, isOn && styles.active)} />
    </label>
  );
};

export default Checkbox;
