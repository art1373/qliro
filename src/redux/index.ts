import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { orderSagas } from "./orders/sagas";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import orderReducer from "./orders/orderSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  order: orderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

function* allSagas() {
  yield all([...orderSagas]);
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== "production",
});

export const presistor = persistStore(store);

sagaMiddleware.run(allSagas);
