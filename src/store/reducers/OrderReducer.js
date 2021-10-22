import OrderData from "../../containers/Order/OrderData";
import * as actionTypes from "../actions";

const initialState = {
  orders: OrderData,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ORDER_DELETED:
      const updatedArrayOfOrders = state.orders.filter(
        (order) => order.id !== action.payload.orderId
      );
      return {
        ...state,
        orders: updatedArrayOfOrders,
      };
    }
  return state;
};

export default orderReducer;
