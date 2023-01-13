import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//................................ react-redux.................................
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

// ..............................sagas.................
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";
import value from "./Reducer/Dispatch";

const rootReducer = combineReducers({ value });

const sagaMiddleware = createSagaMiddleware();

const Globalstore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Globalstore}>
      <App />
    </Provider>
  </React.StrictMode>
);
