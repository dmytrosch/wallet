import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import Notification from "./Notification";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);
  return (
    <>
      <Notification />
      <Input type="number" />
      <br></br>
      <Input type="date" />
      <br></br>
      <Button color="green">DDD</Button>
      <br></br>
      <br></br>
      <Button>DDD</Button>
    </>
  );
}

export default App;
