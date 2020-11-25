import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);
  return <p>hello</p>;
}

export default App;
