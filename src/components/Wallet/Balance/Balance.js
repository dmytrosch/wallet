import React from "react";
import css from "./Balance.module.css";

import formatNumber from "../../../utils/formatNumber";
import { useSelector } from "react-redux";
import { getBalance } from "../../../redux/wallet/walletSelectors";
const { container, text, currentbalance } = css;

export default function Balance() {
  const balance = useSelector(getBalance);

  return (
    <div className={container}>
      <p className={text}>ВАШ БАЛАНС</p>
      <>{formatNumber(balance, currentbalance, "₴ ")}</>
    </div>
  );
}
