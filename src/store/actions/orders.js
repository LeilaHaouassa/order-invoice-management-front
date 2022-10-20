import * as actionTypes from "../actions/types";
import OrderCustomerService from "../../services/OrderCustomerService";

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
