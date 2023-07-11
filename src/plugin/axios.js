import axios from "axios";

const instance = axios.create({
  isFile: false,
  // baseURL: `http://localhost:8080`,
  baseURL: `http://192.168.1.20/houya/public/`,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    // Authorization: token ? `Bearer ${token}` : "",
  },
});
//3
instance.interceptors.request.use((config) => {
  if (window.$cookies.get("token")) {
    config.headers["Authorization"] = "Bearer " + window.$cookies.get("token");
  }
  if (config.isFile) {
    config.headers["Content-Type"] = "multipart/form-data";
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    switch (error.response.status) {
      case 401: // Unauthorized
        if (window.location.pathname != "/login") {
          window.$cookies.remove("token");
          window.location.replace("/login");
        }
        break;
      case 403: // Forbidden
        console.log("Not Have Premissions");
        break;
      case 422: // Unprocessable Content
        console.log("Not Have Premissions");
        break;
      case 404: // Request Not Found
        console.log("No Have Data");
        break;
      case 500: // Server Error
        // window.location.replace("/server-error");
        break;
    }
    return Promise.reject(error);
  }
);

export default instance;
