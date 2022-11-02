import * as actionTypes from "../actions/types";

const initialState = {
  invoices: [],
  document: null,
};

const InvoiceReducer = (state = initialState, action) => {
  let tempInvoices = [];
  switch (action.type) {
    
    case actionTypes.GET_SENT_INVOICES:
      return {
        ...state,
        invoices: action.payload,
      };

    case actionTypes.INVOICE_SENT:
      tempInvoices = [...state.invoices, action.payload];
      return {
        ...state,
        invoices: tempInvoices,
      };

    case actionTypes.GET_RECEIVED_INVOICES:
      return {
        ...state,
        invoices: action.payload,
      };

    case actionTypes.GET_DOC_FOR_INVOICE:
      return {
        ...state,
        document: action.payload,
      };

    default:
      return state;
  }
};

export default InvoiceReducer;
