import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import TransactionsTable from "../components/Wallet/TransactionsTable";

function App() {
  return <TransactionsTable />;
}

export default App;
