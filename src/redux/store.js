import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import walletReducer from "./wallet/walletReducer";
import notificationReducer from "./notifications/notificationReducer";
import loadingReducer from "./loading/loadingReducer";
import clientWidthReducer from "./clientWidth/clientWidthReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    wallet: walletReducer,
    notification: notificationReducer,
    loading: loadingReducer,
    clientWidth: clientWidthReducer,
  },
});

export { store };
