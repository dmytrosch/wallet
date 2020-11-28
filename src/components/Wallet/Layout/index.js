import React from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import Header from "../../Header";

import { isAuthentificated } from "../../../redux/auth/authSelectors";

export default function Layout({ children }) {
  const isAuth = useSelector(isAuthentificated);
  console.log(isAuth);
  return (
    <>
      {isAuth && <Header />}
      {children}
      <CSSTransition
        in={true}
        appear={true}
        classNames={elipseOneAnimation}
        timeout={500}
      >
        <div className={styles.elipseOne}></div>
      </CSSTransition>
      <CSSTransition
        in={true}
        appear={true}
        classNames={elipseTwoAnimation}
        timeout={500}
      >
        <div className={styles.elipseTwo}></div>
      </CSSTransition>
    </>
  );
}
