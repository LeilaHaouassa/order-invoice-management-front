import * as actionTypes from "../actions/types";

const initialState = {
  parties: []

};

const PartyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PARTIES:
      return {
        ...state,
        parties: action.payload,
      };
    case actionTypes.PARTIES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.SUPPLIER_DELETED:
      // const updatedArrayOfsuppliers = state.suppliers.filter(
      //   (supplier) => supplier.id !== action.payload.supplierId
      // );
      // return {
      //   ...state,
      //   suppliers: updatedArrayOfsuppliers,
      // };
  }
  return state;
};

export default PartyReducer;
