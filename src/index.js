import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import orderReducer from "./store/reducers/OrderReducer";
import { Provider } from "react-redux";
import productReducer from "./store/reducers/ProductReducer";
import supplierReducer from "./store/reducers/SupplierReducer";
import DateAdapter from '@mui/lab/AdapterDateFns';
import frLocale from 'date-fns/locale/fr';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const rootReducer = combineReducers({
  orderReducer: orderReducer,
  productReducer: productReducer,
  supplierReducer: supplierReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  // <React.StrictMode>
    <LocalizationProvider dateAdapter={DateAdapter} locale={frLocale}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </LocalizationProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
