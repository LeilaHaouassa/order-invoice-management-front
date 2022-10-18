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



