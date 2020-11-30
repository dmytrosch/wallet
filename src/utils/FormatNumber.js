import NumberFormat from "react-number-format";

import React from "react";

export default function formatNumber(number, className, prefix) {
  return (
    <NumberFormat
      displayType={"text"}
      prefix={prefix}
      value={`${number}`}
      thousandSeparator={" "}
      decimalSeparator={"."}
      thousandsGroupStyle="lakh"
      renderText={(value) => <p className={className}>{value}</p>}
      children
    />
  );
}
