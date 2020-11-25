import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/";
import { walletReducer } from "./wallet/";
import { notificationReducer } from "./notifications/";
import { loadingReducer } from "./loading/";

const store = configureStore({
  reducer: {
    auth: authReducer,
    wallet: walletReducer,
    notification: notificationReducer,
    loading: loadingReducer,
  },
});

export { store };
