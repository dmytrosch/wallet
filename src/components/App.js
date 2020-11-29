import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setClientWidth } from "../redux/clientWidth/clientWidthAction";

import { isLoading } from "../redux/loading/loadingSelector";
import { isMobile } from "../redux/clientWidth/clientWidthSelectors";

import Notification from "./Notification";
import Loader from "./Loader";

import { Switch, Redirect, BrowserRouter } from "react-router-dom";
import routes from "../utils/routes";
import PrivateRoute from "../components/Routes/PrivateRoute";
import PublicRoute from "../components/Routes/PublicRoute";

import ModalPortal from "./Wallet/creatingTransaction/ModalPortal";
import Modal from "./Wallet/creatingTransaction/Modal";

import NewTransaction from "./Wallet/creatingTransaction/NewTransaction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);
  const loading = useSelector(isLoading);
  const isMobileMode = useSelector(isMobile);
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes
              .filter((route) => route.onlyMobile === false)
              .map((route) =>
                route.private ? (
                  <PrivateRoute key={route.path} {...route} />
                ) : (
                  <PublicRoute key={route.path} {...route} />
                )
              )}
            {isMobileMode &&
              routes
                .filter((route) => route.onlyMobile === true)
                .map((route) => <PrivateRoute key={route.path} {...route} />)}

            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
      <Notification />
      {loading && <Loader />}

      {/* <Modal>
        <NewTransaction />
      </Modal> */}

      {/* <NewTransaction />
    <Notification /> */}
    </>
  );
}

export default App;
