import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import Checkbox from "../common/Checkbox/Checkbox";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";

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
        <Button name="Login">
            <span>Логин</span>
        </Button>
        <Button color="green">регистрация</Button>
        <Button color="green" shape="circle">
           <span>+</span>
        </Button>
        <Input type="email" placeholder="Type email..." />
    </>
  );
}

export default App;
