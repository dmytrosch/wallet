import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import walletReducer from "./wallet/walletReducer";
import notificationReducer from "./notifications/notificationReducer";
import loadingReducer from "./loading/loadingReducer";
import clientWidthReducer from "./clientWidth/clientWidthReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    wallet: walletReducer,
    notification: notificationReducer,
    loading: loadingReducer,
    clientWidth: clientWidthReducer,
  },
});

export { store };
