import React from "react";
import css from "./Balance.module.css";

import formattingNumber from "../../../utils/formattingNumber";
import { useSelector } from "react-redux";
import { getBalance } from "../../../redux/wallet/walletSelectors";
import { isLoading } from "../../../redux/loading/loadingSelector";
const { container, text, currentbalance } = css;

export default function Balance() {
  const balance = useSelector(getBalance);
  const loading = useSelector(isLoading);
  return (
    <div className={container}>
      <p className={text}>ВАШ БАЛАНС</p>
      <>{!loading && formattingNumber(balance, currentbalance, "₴ ")}</>
    </div>
  );
}
