import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import productReducer from "./store/reducers/ProductReducer";
import partyReducer from "./store/reducers/PartyReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import DateAdapter from "@mui/lab/AdapterDateFns";
import frLocale from "date-fns/locale/fr";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import thunk from "redux-thunk";
import orderReducer from "./store/reducers/OrderReducer";
import settingsReducer from "./store/reducers/SettingReducer";
import invoiceReducer from "./store/reducers/InvoiceReducer";

const middleware = [thunk];
const rootReducer = combineReducers({
  invoiceReducer: invoiceReducer,
  settingsReducer: settingsReducer,
  orderReducer: orderReducer,
  productReducer: productReducer,
  partyReducer: partyReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware,logger)),
  
);

ReactDOM.render(
  <React.StrictMode>
  {/* <LocalizationProvider dateAdapter={DateAdapter} locale={frLocale}> */}
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  {/* </LocalizationProvider>, */}
 </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
