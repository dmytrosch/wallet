import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import Notification from "./Notification";
import Loader from './Loader'

import NewTransaction from './Wallet/creatingTransaction/NewTransaction';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);
  return <>
  {/* <Loader /> */}

  <NewTransaction />

  </>;
}

export default App;
