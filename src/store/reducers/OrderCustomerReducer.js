import * as actionTypes from "../actions/types";

const initialState = {
  orders: [],
  history: [],
};

const OrderCustomerReducer = (state = initialState, action) => {
  let tempOrders = [];
  switch (action.type) {
    case actionTypes.GET_SENT_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case actionTypes.ORDER_SENT:
      tempOrders = [...state.orders, action.payload];
      return {
        ...state,
        orders: tempOrders,
      };
    case actionTypes.ORDER_CANCELLED:
      tempOrders = [...state.orders, ...action.payload];
      return {
        ...state,
        orders: tempOrders,
      };
    case actionTypes.ORDER_CHANGED:
      tempOrders = [...state.orders, action.payload];
      return {
        ...state,
        orders: tempOrders,
      };
    case actionTypes.GET_ORDER_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
    case actionTypes.ORDER_RETRIEVED:
      tempOrders = [action.payload];
      return {
        ...state,
        orders: tempOrders,
      };
    default:
      return state;
  }
};

export default OrderCustomerReducer;
