import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import Balance from "./Wallet/Balance/Balance";
import CurrencyRates from "./Wallet/CurrencyRates/CurrencyRates";

function App() {
  return (
    <>
      <Balance />
      <CurrencyRates />
    </>
  );
}

export default App;
