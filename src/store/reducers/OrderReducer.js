import * as actionTypes from "../actions/types";

const initialState = {
  orders: [],
  history: [],
  document: null,
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
      tempOrders = state.orders;
      tempOrders = tempOrders.map((order) => {
        if (order.technicalId === action.payload.technicalId) {
          return {
            ...order,
            ...action.payload,
          };
        } else {
          return order;
        }
      });
      return {
        ...state,
        orders: tempOrders,
      };
    case actionTypes.ORDER_CHANGED:
      tempOrders = state.orders;
      tempOrders = tempOrders.map((order) => {
        if (order.technicalId === action.payload.technicalId) {
          return {
            ...order,
            ...action.payload,
          };
        } else {
          return order;
        }
      });
      return {
        ...state,
        orders: tempOrders,
      };
    case actionTypes.ORDER_ACCEPTED_BY_CUSTOMER:
      tempOrders = state.orders;
      tempOrders = tempOrders.map((order) => {
        if (order.technicalId === action.payload.technicalId) {
          return {
            ...order,
            ...action.payload,
          };
        } else {
          return order;
        }
      });
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
    case actionTypes.GET_RECEIVED_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case actionTypes.ORDER_REJECTED:
      tempOrders = state.orders;
      tempOrders = tempOrders.map((order) => {
        if (order.technicalId === action.payload.technicalId) {
          return {
            ...order,
            ...action.payload,
          };
        } else {
          return order;
        }
      });
      return {
        ...state,
        orders: tempOrders,
      };
    case actionTypes.ORDER_ADDED_TO:
      tempOrders = state.orders;
      tempOrders = tempOrders.map((order) => {
        if (order.technicalId === action.payload.technicalId) {
          return {
            ...order,
            ...action.payload,
          };
        } else {
          return order;
        }
      });
      return {
        ...state,
        orders: tempOrders,
      };
    case actionTypes.ORDER_ACCEPTED_BY_SUPPLIER:
      tempOrders = state.orders;
      tempOrders = tempOrders.map((order) => {
        if (order.technicalId === action.payload.technicalId) {
          return {
            ...order,
            ...action.payload,
          };
        } else {
          return order;
        }
      });
      return {
        ...state,
        orders: tempOrders,
      };
    case actionTypes.ORDER_ACCEPTED_WITH_RESPONSE:
      tempOrders = state.orders;
      tempOrders = tempOrders.map((order) => {
        if (order.technicalId === action.payload.technicalId) {
          return {
            ...order,
            ...action.payload,
          };
        } else {
          return order;
        }
      });
      return {
        ...state,
        orders: tempOrders,
      };
    case actionTypes.GET_DOC_FOR_ORDER_NEGOTIATION:
      return {
        ...state,
        document: action.payload,
      };
    case actionTypes.GET_DOC_FOR_ORDER_CHANGE:
      return {
        ...state,
        document: action.payload,
      };
    default:
      return state;
  }
};

export default OrderCustomerReducer;
