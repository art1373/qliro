import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { authReducer } from "./auth/reducer";
import { orderReducer } from "./orders/reducer";
import { orderSagas } from "./orders/sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  order: orderReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

function* allSagas() {
  yield all([...orderSagas]);
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const presistor = persistStore(store);

sagaMiddleware.run(allSagas);
