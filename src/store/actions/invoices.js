import * as actionTypes from "../actions/types";
import InvoiceService from "../../services/InvoiceService";

export const getDocumentForInvoice =
  (partyId, orderId) => async (dispatch) => {
    try {
      const res = await InvoiceService.getDocumentForInvoice(partyId, orderId);
      dispatch({
        type: actionTypes.GET_DOC_FOR_INVOICE,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (error) {
      if (error.response) {
        // client received an error response (5xx, 4xx)
        throw error.response.data;
      } else if (error.request) {
        // client never received a response, or request never left
        console.log(error);
      } else {
        // anything else
        console.log(error);
      }
    }
  };

export const getSentInvoices = (partyId) => async (dispatch) => {
  try {
    const res = await InvoiceService.getSentInvoices(partyId);
    dispatch({
      type: actionTypes.GET_SENT_INVOICES,
      payload: res.data,
    });
  } catch (err) {
    throw err;
  }
};

export const getReceivedInvoices = (partyId) => async (dispatch) => {
  try {
    const res = await InvoiceService.getReceivedInvoices(partyId);
    dispatch({
      type: actionTypes.GET_RECEIVED_INVOICES,
      payload: res.data,
    });
  } catch (err) {
    throw err;
  }
};

export const sendInvoice = (partyId, data) => async (dispatch) => {
    try {
      const res = await InvoiceService.sendInvoice(partyId,data);
      dispatch({
        type: actionTypes.INVOICE_SENT,
        payload: res.data,
      });
    } catch (error) {
      if (error.response) {
        // client received an error response (5xx, 4xx)
        throw error.response.data;
      } else if (error.request) {
        // client never received a response, or request never left
        console.log(error);
      } else {
        // anything else
        console.log(error);
      }
    }
  };
