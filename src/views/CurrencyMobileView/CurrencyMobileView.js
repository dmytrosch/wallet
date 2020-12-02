import React from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import CurrencyRates from "../../components/Wallet/CurrencyRates/CurrencyRates";
import css from "./CurrencyMobileView.module.css";

export default function CurrencyMobileView() {
  document.title = "Курс валют || Wallet";
  return (
    <main className={css.main}>
      <Header />
      <Navigation />
      <CurrencyRates />
    </main>
  );
}
