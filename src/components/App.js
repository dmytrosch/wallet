import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import Header from "./Header/Header.js";
import Navigation from "./Navigation/Navigation.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);
  return(
    <div>
      <Header/>
      <Navigation/>
    </div>
  ) 
}

export default App;

