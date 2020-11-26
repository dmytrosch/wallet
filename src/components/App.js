import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import CurrencyRates from "./Wallet/CurrencyRates/CurrencyRates";

function App() {
  return <CurrencyRates />;
}

export default App;
