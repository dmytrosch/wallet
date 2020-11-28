import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import { isLoading } from "../redux/loading/loadingSelector";
import Notification from "./Notification";
import Loader from "./Loader";
import LoginView from "../views/LoginView";
import SignupView from "../views/SignupView";
import MainView from "../views/MainView";
import StatsView from "../views/StatsView";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);
  const loading = useSelector((state) => isLoading(state));
  return (
    <>
      <div>
        <LoginView />
        <SignupView />
        <MainView />
        <StatsView />
      </div>
      <Notification />
      {loading && <Loader />}
    </>
  );
}

export default App;
