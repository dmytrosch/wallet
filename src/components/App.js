import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import Notification from "./Notification";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);

  return <Loader />;
}

export default App;
