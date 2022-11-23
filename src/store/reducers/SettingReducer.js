import * as actionTypes from "../actions/types";

const initialState = {
  settings: false
};

const SettingsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case actionTypes.GET_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };
    case actionTypes.SETTINGS_CHANGED:
      return {
        settings: action.payload,
      };
    default:
      return state;
  }
  
};

export default SettingsReducer;
