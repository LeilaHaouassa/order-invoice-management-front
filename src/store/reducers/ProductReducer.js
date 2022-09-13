import productData from "../../containers/Product/ProductData";
import * as actionTypes from "../actions/types";

const initialState = {
  products: productData,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DELETED:
      const updatedArrayOfProducts = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: updatedArrayOfProducts,
      };
  }
  return state;
};

export default productReducer;
