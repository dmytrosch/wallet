import React from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import classNames from 'classnames'
import styles from "./Notification.module.scss";
import animation from "./animation.module.scss";

import { getNotification } from "../../redux/notifications/notificationSelectors";

const Notification = () => {
  const { type, message } = useSelector((state) => getNotification(state));
  return (
    <CSSTransition
      in={message ? true : false}
      unmountOnExit
      classNames={animation}
      timeout={250}
    >
      <div className={classNames(styles.box, styles[type])}>
        <p>{message}</p>
      </div>
    </CSSTransition>
  );
};

export default Notification;
