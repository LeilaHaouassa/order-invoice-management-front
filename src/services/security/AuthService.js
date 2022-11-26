import http from "../../http-common";
import TokenService from "./TokenService";

const register = (username, email, password) => {
  return http.post("/auth/signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return http
    .post("/auth/login", null, {
      params: {
        email: email,
        password: password,
      },
    })
    .then((response) => {
      if (response.data.access_token) {
        TokenService.setUser(response.data);
      }
      return response.data;
    });
};

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser
};

export default AuthService;
