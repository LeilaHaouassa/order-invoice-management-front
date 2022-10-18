import * as actionTypes from "../actions/types";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      const updatedArrayOfProducts = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: action.payload,
      };
  }
  return state;
};

export default productReducer;
