import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
<<<<<<< HEAD
import Header from "./Header/Header.js";
import Navigation from "./Navigation/Navigation.js";
=======
import { isLoading } from "../redux/loading/loadingSelector";
import Notification from "./Notification";
import Loader from "./Loader";
import LoginView from "../views/LoginView";
import SignupView from "../views/SignupView";
import MainView from "../views/MainView";
import StatsView from "../views/StatsView";
>>>>>>> 27cb7a41bea187c48b6d26a0dcf839bcc508026d

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);
<<<<<<< HEAD
  return(
    <div>
      <Header/>
      <Navigation/>
    </div>
  ) 
=======
  const loading = useSelector((state) => isLoading(state));
  return (
    <>
      <div>
        <LoginView />
        <SignupView />
        {/* <MainView /> */}
        {/* <StatsView /> */}
      </div>
      <Notification />
      {loading && <Loader />}
    </>
  );
>>>>>>> 27cb7a41bea187c48b6d26a0dcf839bcc508026d
}

export default App;

