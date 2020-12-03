import React from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import CurrencyRates from "../../components/Wallet/CurrencyRates/CurrencyRates";
import AuthLayout from "../authLayout";
import css from "./CurrencyMobileView.module.css";

export default function CurrencyMobileView() {
  React.useEffect(() => (document.title = "Курс валют || Wallet"), []);
  return (
    <>
      <AuthLayout>
        <CurrencyRates />
      </AuthLayout>
    </>
  );
}
