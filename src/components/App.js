import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";

import NewTransaction from "./Wallet/creatingTransaction/NewTransaction";

function App() {
  return (
    <>
      <p>hello</p>
      <NewTransaction />
    </>
  );
}

export default App;
