import * as actionTypes from "../actions/types";
import ProductService from "../../services/ProductService";

export const retrieveProducts = () => async (dispatch) => {
  try {
    const res = await ProductService.getProducts();
    dispatch({
      type: actionTypes.GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    throw err;
  }
};