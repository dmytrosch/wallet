import NumberFormat from "react-number-format";

import React from "react";

const minimizeNumber = (fullNumber) => {
  if (fullNumber >= 100000 && fullNumber < 1000000) {
    return ((fullNumber * 100) / 100 / 1000).toFixed(2);
  }
  if (fullNumber >= 1000000) {
    return ((fullNumber * 100) / 100 / 1000000).toFixed(2);
  }
};
const normazileNumber = (number) => {
  const isNegative = number < 0;
  const positiveNumber = Math.abs(number);
  const normalizedNumber =
    positiveNumber < 100000
      ? Number(positiveNumber).toFixed(2)
      : minimizeNumber(positiveNumber);
  return isNegative ? -normalizedNumber : normalizedNumber;
};

export default function formattingNumber(number, className, prefix) {
  return (
    <NumberFormat
      displayType={"text"}
      prefix={prefix}
      value={normazileNumber(number)}
      suffix={
        (Math.abs(number) >= 100000 && Math.abs(number) < 1000000 && "K") ||
        (Math.abs(number) >= 1000000 && "M")
      }
      thousandSeparator={" "}
      decimalSeparator={"."}
      thousandsGroupStyle="thousand"
      renderText={(value) => <p className={className}>{value}</p>}
      children
    />
  );
}
