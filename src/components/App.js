import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import Checkbox from "./UI/Checkbox";
import Button from "./UI/Button";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, [dispatch]);
  return (
    <>
      <p>hello</p>
      <Checkbox />
      <br></br>
      <Button name="Login" />
      <Button color="green" name="Enter" />
      <Button shape="circle" />
    </>
  );
}

export default App;
