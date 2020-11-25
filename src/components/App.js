import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClientWidth } from "../redux/clientWidth/clientWidthAction";
import { makeAlertNotification, makeSuccessNotification } from '../redux/notifications/notificationOperations';
import Notification from '../components/Notification/';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(makeSuccessNotification('lorem lorem lorem'))
    dispatch(setClientWidth(document.documentElement.clientWidth));
  }, []);
  return <Notification/>;
}

export default App;
