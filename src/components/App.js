import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import Notification from "./Notification";
import Input from "../common/Input";
import Button from "../common/Button";
import Checkbox from "../common/Checkbox";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);
  return (
    <>
      <Notification />
      <Input type="email" />
      <br></br>
      <br></br>
      <br></br>
      <Input type="date" />
      <br></br>
      <br></br>
      <br></br>
      <Button color="green">DDD</Button>
      <br></br>
      <br></br>
      <Checkbox />

      <br></br>
      <br></br>
    </>
  );
}

export default App;
