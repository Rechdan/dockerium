import axios from "axios";

import useUserSession from "_/stores/user-session";

const api = axios.create({
  baseURL: "/api",
});

api.interceptors.request.use((config) => {
  const jwt = useUserSession.getState().jwt;

  if (jwt) {
    config.headers.setAuthorization(jwt, true);
  } else {
    config.headers.setAuthorization("TEST AUTH", true);
  }

  return config;
});

api.interceptors.response.use((res) => {
  const body = res.data;

  if (body && typeof body === "object") {
    if ("jwt" in body) {
      useUserSession.setState({ jwt: body.jwt });
    }
  }

  return res;
});

export default api;
