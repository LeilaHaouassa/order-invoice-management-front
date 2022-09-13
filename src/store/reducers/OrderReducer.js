import OrderData from "../../containers/Order/OrderData";
import * as actionTypes from "../actions/types";

const initialState = {
  orders: OrderData,
};

const orderReducer = (state = initialState, action) => {
  const updatedArrayOfOrders = null;
  switch (action.type) {
    case actionTypes.ORDER_DELETED:
      updatedArrayOfOrders = state.orders.filter(
        (order) => order.id !== action.payload.orderId
      );
      return {
        ...state,
        orders: updatedArrayOfOrders,
      };
    case actionTypes.ORDER_ADDED:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
  }
  return state;
};

export default orderReducer;
