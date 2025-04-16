import axios from "axios";
import Cookies from "js-cookie";
import { ErrorToast } from "./component/global/Toaster";
import { UAParser } from "ua-parser-js";
import { v4 as uuidv4 } from "uuid";
// import FingerprintJS from "@fingerprintjs/fingerprintjs";
export const baseUrl = "http://3.17.215.238/"; // Add the protocol (http:// or https://)

const getDeviceName = () => {
  const parser = new UAParser();
  const result = parser.getResult();
  const deviceName = result.device.model || "Unknown";
  const deviceID = result.ua || "Unknown"; // User-Agent can serve as a unique identifier

  return deviceName;
};

const getDeviceId = () => {
  const parser = new UAParser();
  const result = parser.getResult();
  const uuid = uuidv4();

  const deviceName = `${result.device.model}` || "Unknown";
  const deviceID = result.ua || "Unknown"; // User-Agent can serve as a unique identifier

  const preId = deviceName + uuid;

  return preId;
};

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    devicemodel: getDeviceName(),
    deviceuniqueid: getDeviceId(),
  },
  timeout: 10000, // 10 seconds timeout
});

instance.interceptors.request.use((request) => {
  const token = Cookies.get("token");
  console.log(token,"token");
  
  if (!navigator.onLine) {
    ErrorToast(
      "No internet connection. Please check your network and try again."
    );
    return;
  }

  request.headers = {
    ...request.headers, 
    Accept: "application/json, text/plain, */*",
    ...(token && { Authorization: `Bearer ${token}` }), // Add Authorization only if token exists
  };

  return request;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      // Slow internet or request timeout
      ErrorToast("Your internet connection is slow. Please try again.");
    }

    if (error.response && error.response.status === 401 || error.response.status === 403 ) {
      // Unauthorized error
      Cookies.remove("token");
      Cookies.remove("user");
      ErrorToast("Session expired. Please relogin");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default instance;
