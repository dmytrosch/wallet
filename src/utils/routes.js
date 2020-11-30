import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import("../views/MainView" /* webpackChunkName: "home" */)
    ),
    private: false,
    restricted: false,
    onlyMobile: false,
  },
  {
    path: "/statistics",
    label: "Statistics",
    exact: true,
    component: lazy(() =>
      import("../views/StatsView" /* webpackChunkName: "stats" */)
    ),
    private: true,
    restricted: false,
    onlyMobile: false,
  },
  // {
  //   path: "/currency",
  //   label: "Currency",
  //   exact: true,
  //   component: lazy(() =>
  //     import("../views/CurrencyView" /* webpackChunkName: "currency" */)
  //   ),
  //   private: true,
  //   restricted: false,
  //   onlyMobile: true,
  // },
  {
    path: "/signup",
    label: "Signup",
    exact: true,
    component: lazy(() =>
      import("../views/SignupView/" /* webpackChunkName: "signup" */)
    ),
    private: false,
    restricted: true,
    onlyMobile: false,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() =>
      import("../views/LoginView/" /* webpackChunkName: "login" */)
    ),
    private: false,
    restricted: true,
    onlyMobile: false,
  },
];
