import React from "react";
import { useSelector } from "react-redux";
import { getBalance } from "../../../redux/wallet/walletSelectors";

export default function Balance() {
  const balance = useSelector(getBalance);
  return (
    <div>
      <p>Ваш баланс {balance}</p>
    </div>
  );
}
