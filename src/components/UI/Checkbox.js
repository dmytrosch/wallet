import React, { useState } from "react";
import "./Checkbox.css";

const Checkbox = () => {
  const [isOn, setOn] = useState(false);

  return (
    <>
      <input
        checked={isOn}
        onChange={() => setOn(!isOn)}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span
          className={`react-switch-button`}
          style={{
            background: isOn && "#FF6596",
            boxShadow: isOn && `0px 6px 15px rgba(255, 101, 150, 0.5)`,
          }}
        ></span>
      </label>
    </>
  );
};

export default Checkbox;
