import React from "react";
import CurrencyRates from "../../components/Wallet/CurrencyRates/CurrencyRates";
import AuthLayout from "../authLayout";

export default function CurrencyMobileView() {
  React.useEffect(() => {
    document.title = "Курс валют || Wallet";
  }, []);
  return (
    <>
      <AuthLayout>
        <CurrencyRates />
      </AuthLayout>
    </>
  );
}
