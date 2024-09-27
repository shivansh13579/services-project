import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "./slice/serviceSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const servicePersistConfig = {
  key: "services",
  storage,
};

const persistServiceReducer = persistReducer(
  servicePersistConfig,
  serviceSlice
);

export const store = configureStore({
  reducer: {
    services: persistServiceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore persistor actions in serializability checks
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PURGE",
        ],
      },
    }),
});

export const persist = persistStore(store);
