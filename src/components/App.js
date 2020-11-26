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
      <p>hello</p> <Checkbox />
      <br></br>
      <Button name="Login">
        <span>Логин</span>
      </Button>
      <Button color="green">регистрация</Button>
      <Button color="green" shape="circle">
        <span>+</span>
      </Button>
      <br></br>
      <Input type="email" placeholder="E-mail..." className="email" />
      <br></br>
      <Input type="text" placeholder="Name" className="name" />
      <br></br>
      <Input type="password" placeholder="Password" className="password" />
      <br></br>
      <Input type="text" placeholder="Comment" />
      <br></br>
      <Input type="number" placeholder="0.00" />
    </>
  );
}

export default App;
