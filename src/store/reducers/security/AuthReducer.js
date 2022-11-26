import * as actionTypes from "../../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user, message: "" }
  : { isLoggedIn: false, user: null, message: "" };

const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        message: payload.message,
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        message: payload.message,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        message: "",
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        message: payload.message,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        message: "",
      };
    case actionTypes.REFRESH_TOKEN:
      return {
        ...state,
        user: { payload },
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
