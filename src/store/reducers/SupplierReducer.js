import supplierData from "../../containers/Supplier/SupplierData";
import * as actionTypes from "../actions";

const initialState = {
  suppliers: supplierData,
};

const SupplierReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUPPLIER_DELETED:
      const updatedArrayOfsuppliers = state.suppliers.filter(
        (supplier) => supplier.id !== action.payload.supplierId
      );
      return {
        ...state,
        suppliers: updatedArrayOfsuppliers,
      };
  }
  return state;
};

export default SupplierReducer;
