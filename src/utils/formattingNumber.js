import NumberFormat from "react-number-format";

import React from "react";

const minimizeNumber = (fullNumber) => {
  return Math.round(((fullNumber / 1000000) * 100) / 100);
};

export default function formattingNumber(number, className, prefix) {
  return (
    <NumberFormat
      displayType={"text"}
      prefix={prefix}
      value={
        number < 1000000 ? Number(number).toFixed(2) : minimizeNumber(number)
      }
      suffix={number >= 1000000 && "M"}
      thousandSeparator={" "}
      decimalSeparator={"."}
      thousandsGroupStyle="thousand"
      renderText={(value) => <p className={className}>{value}</p>}
      children
    />
  );
}
