import * as actionTypes from "../actions/types";
import OrderCustomerService from "../../services/OrderCustomerService";
import OrderService from "../../services/OrderService";
import OrderSupplierService from "../../services/OrderSupplierService";

export const retrieveSentOrders = (partyId) => async (dispatch) => {
  try {
    const res = await OrderCustomerService.getSentOrders(partyId);
    dispatch({
      type: actionTypes.GET_SENT_ORDERS,
      payload: res.data,
    });
  } catch (err) {
    throw err;
  }
};

export const placeOrder = (partyId, data) => async (dispatch) => {
  try {
    const res = await OrderCustomerService.placeOrder(partyId,data);
    dispatch({
      type: actionTypes.ORDER_SENT,
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


export const cancelOrder = (partyId, data) => async (dispatch) => {
  try {
    const res = await OrderCustomerService.cancelOrder(partyId,data);
    dispatch({
      type: actionTypes.ORDER_CANCELLED,
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

export const changeOrder = (partyId, data) => async (dispatch) => {
  try {
    const res = await OrderCustomerService.changeOrder(partyId,data);
    dispatch({
      type: actionTypes.ORDER_CHANGED,
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

export const acceptOrder = (partyId, orderId) => async (dispatch) => {
  try {
    const res = await OrderCustomerService.acceptOrder(partyId,orderId);
    dispatch({
      type: actionTypes.ORDER_ACCEPTED_BY_CUSTOMER,
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

export const getDocumentForOrderChange = (partyId, orderId) => async (dispatch) => {
  try {
    const res = await OrderCustomerService.getDocumentForOrderChange(partyId,orderId);
    dispatch({
      type: actionTypes.GET_DOC_FOR_ORDER_CHANGE,
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

export const getOrderHistory = (orderId) => async (dispatch) => {
  try {
    const res = await OrderService.getOrderHistory(orderId);
    dispatch({
      type: actionTypes.GET_ORDER_HISTORY,
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

export const getOrderById = (orderId) => async (dispatch) => {
  try {
    const res = await OrderService.getOrderById(orderId);
    dispatch({
      type: actionTypes.ORDER_RETRIEVED,
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

export const retrieveReceivedOrders = (partyId) => async (dispatch) => {
  try {
    const res = await OrderSupplierService.getReceivedOrders(partyId);
    dispatch({
      type: actionTypes.GET_RECEIVED_ORDERS,
      payload: res.data,
    });
  } catch (err) {
    throw err;
  }
};

export const rejectOrder = (partyId, data) => async (dispatch) => {
  try {
    const res = await OrderSupplierService.rejectOrder(partyId,data);
    dispatch({
      type: actionTypes.ORDER_REJECTED,
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

export const addDetail = (partyId, data) => async (dispatch) => {
  try {
    const res = await OrderSupplierService.addDetail(partyId,data);
    dispatch({
      type: actionTypes.ORDER_ADDED_TO,
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

export const acceptWithNoFurtherAction = (partyId, orderId) => async (dispatch) => {
  try {
    const res = await OrderSupplierService.acceptWithNoFurtherAction(partyId,orderId);
    dispatch({
      type: actionTypes.ORDER_ACCEPTED_BY_SUPPLIER,
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

export const acceptWithResponse = (partyId, data) => async (dispatch) => {
  try {
    const res = await OrderSupplierService.acceptWithResponse(partyId,data);
    dispatch({
      type: actionTypes.ORDER_ACCEPTED_WITH_RESPONSE,
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

export const getNegotiationDocument = (partyId, orderId) => async (dispatch) => {
  try {
    const res = await OrderSupplierService.getNegotiatingDocument(partyId,orderId);
    dispatch({
      type: actionTypes.GET_DOC_FOR_ORDER_NEGOTIATION,
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

