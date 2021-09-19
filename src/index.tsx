import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { presistor, store } from "./redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={presistor}>
      <App />
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
