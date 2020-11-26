import React from "react";
import SignUp from "./authComponents/SignUp";
import LogIn from "./authComponents/LogIn";
import Notification from "./Notification/index";

function App() {
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
