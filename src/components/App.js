import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import Notification from "./Notification";
import SignUp from './authComponents/SignUp';
import LogIn from './authComponents/LogIn';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);
   return (
    <>
      <p>hello</p>
      <SignUp />
      <hr/>
      <LogIn />
      <Notification/>
    </>
  );
}

export default App;
