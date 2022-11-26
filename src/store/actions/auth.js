import AuthService from "../../services/security/AuthService"
import * as actionTypes from "../actions/types";


export const register = (username, email, password) => (dispatch) => {
  return AuthService.register(username, email, password).then(
    (response) => {
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: {message: response.data.message},
      });
      
      return Promise.resolve(response.data.message);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: actionTypes.REGISTER_FAIL,
        payload: {message: message},
      });

      return Promise.reject(message);
    }
  );
};

export const login = (email, password) => async (dispatch) => {
  
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: actionTypes.LOGIN_FAIL,
        payload: {message: message},
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: actionTypes.LOGOUT,
  });
};

export const refreshToken = (user) => (dispatch) => {
  dispatch({
    type: actionTypes.REFRESH_TOKEN,
    payload: user,
  })
}

export const  expireToken = () => (dispatch) => {
  dispatch({
    type: actionTypes.TOKEN_EXPIRED,
  })
}