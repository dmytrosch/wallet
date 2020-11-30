import React from "react";
import Header from "../../components/Header/index";
import css from "./CurrencyMobileView.module.css";
import Balance from "../../components/Wallet/Balance/Balance";

export default function CurrencyMobileView() {
  const { container } = css;
  return (
    <div className={container}>
      <Header />
      <Balance />
    </div>
  );
}
