import {
  combineReducers,
  configureStore,
  EnhancedStore,
  Store,
} from "@reduxjs/toolkit";
import authSlice from "@store/auth";
import { loadTokenState } from "@utils/redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "@services/api";
import storageSession from "redux-persist/lib/storage/session";
import { createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storageSession,
  blacklist: ["api"],
};

const reducer = combineReducers({
  api: api.reducer,
  auth: authSlice,
});

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      return reducer(state, action);
    }
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  preloadedState: loadTokenState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { persistor, store };

export type Reducer = ReturnType<typeof reducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const setupStore = (context: any): EnhancedStore => store;
const makeStore: MakeStore<any> = (context: any) => setupStore(context);

export const wrapper = createWrapper<Store<RootState>>(makeStore);
