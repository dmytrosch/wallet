import React from "react";
import style from "./Balance.module.css";
import { useSelector } from "react-redux";
import { getBalance } from "../../../redux/wallet/walletSelectors";

export default function Balance() {
  const balance = useSelector(getBalance);
  const { container, text, currentbalance } = style;
  return (
    <div className={container}>
      <p className={text}>Ваш баланс</p>
      <p className={currentbalance}>₴{balance}</p>
    </div>
  );
}
