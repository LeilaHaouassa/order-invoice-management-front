import http from "../../http-common";
import TokenService from "./TokenService";
import { refreshToken } from "../../store/actions/auth";


const Setup = (store) => {
  
  http.interceptors.request.use(
    (config) => {
      console.log(config.url);
      if (
        config.url !== "/auth/login" &&
        config.url !== "/auth/signup" &&
        config.url !== "/auth/refreshtoken"
      ) {
        const token = TokenService.getLocalAccessToken();
        if (token) {
          config.headers["Authorization"] = "Bearer " + token;
        }
      } else if (
        config.url === "/auth/login" ||
        config.url === "/auth/signup"
      ) {
        config.headers["Authorization"] = "";
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const { dispatch } = store;
  http.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
      if (originalConfig.url !== "/auth/login" && err.response) {
        // Access Token was expired
        if (err.response.status === 401) {
          // dispatch token expired

          try {
            const rs = await http.get("/auth/refreshtoken", {
              headers: {
                Authorization: "Bearer " + TokenService.getLocalRefreshToken(),
              },
            });

            const user = rs.data;
            TokenService.setUser(user);
            dispatch(refreshToken(user));
            return http(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    }
  );
};

export default Setup;
