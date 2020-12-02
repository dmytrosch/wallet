import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import("../views/MainView" /* webpackChunkName: "home" */)
    ),
    private: true,
    restricted: false,
    onlyMobile: false,
  },
  {
    path: "/statistics",
    label: "Statistics",
    exact: true,
    component: lazy(() =>
      import("../views/StatsView/StatsView" /* webpackChunkName: "stats" */)
    ),
    private: true,
    restricted: false,
    onlyMobile: false,
  },
  {
    path: "/currency",
    label: "Currency",
    exact: true,
    component: lazy(() =>
      import(
        "../views/CurrencyMobileView/CurrencyMobileView" /* webpackChunkName: "currency" */
      )
    ),
    private: true,
    restricted: false,
    onlyMobile: true,
  },
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
  {
    path: "/new-transaction",
    label: "New transaction",
    exact: true,
    component: lazy(() =>
      import(
        "../views/NewTranactionView/" /* webpackChunkName: "new_transaction" */
      )
    ),
    private: true,
    restricted: false,
    onlyMobile: true,
  },
];
