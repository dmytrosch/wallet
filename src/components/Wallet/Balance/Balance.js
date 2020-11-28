import React from "react";
import NumberFormat from "react-number-format";
import css from "./Balance.module.css";

import { useSelector } from "react-redux";
import { getBalance } from "../../../redux/wallet/walletSelectors";

export default function Balance() {
  const balance = useSelector(getBalance);
  const { container, text, currentbalance,  } = css;
  return (
    <div className={container}>
      <p className={text}>ВАШ БАЛАНС</p>
      <NumberFormat
        displayType={"text"}
        prefix={"₴ "}
        value={`${balance}`}
        thousandSeparator={" "}
        decimalSeparator={"."}
        thousandsGroupStyle="lakh"
        children
        renderText={(value) => <p className={currentbalance}>{value}</p>}
      ></NumberFormat>
    </div>
  );
}
