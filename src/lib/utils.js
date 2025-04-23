import { ErrorToast } from "../component/global/Toaster";
import Cookies from "js-cookie";

export const processSignup = (data, navigate) => {
  if (data?.success) {
    Cookies.set("token", data?.data?.token, { expires: 7 });
    Cookies.set("admin", JSON.stringify(data?.data.user), { expires: 7 });
    navigate("/help-us");
    // console.log(data, "data");

    return;
  }
};

export const processLogin = (data, navigate) => {
  if (data?.success) {
    console.log(data,"userData")
    Cookies.set("data",data?.data?.user?.name, { expires: 7 });
    Cookies.set("token", data?.data?.token, { expires: 7 });
    navigate("/");
    return;
  }
};

export const processError = (error) => {
  if (error?.response?.data?.message) {
    // console.log(error?.response?.data?.message, "erross");
    ErrorToast(error?.response?.data?.message);
    return;
  } else {
    ErrorToast("Something went wrong");
  }
};
export const formatTimeRange = (startTimeISO, endTimeISO) => {
  // Format a single time
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Add leading zero to minutes if needed
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${formattedMinutes} ${ampm}`;
  };

  const formattedStartTime = formatTime(startTimeISO);
  const formattedEndTime = formatTime(endTimeISO);

  return `${formattedStartTime} - ${formattedEndTime}`;
};

export const formatTime = (startTimeISO) => {
  // Format a single time
  const formatTime = (isoString) => {
    const date = new Date(isoString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${formattedMinutes} ${ampm}`;
  };

  const formattedStartTime = formatTime(startTimeISO);

  return `${formattedStartTime}`;
};

export const TotalDuration = (startTimeISO, endTimeISO) => {
  const start = new Date(startTimeISO);
  const end = new Date(endTimeISO);

  const durationMs = end - start;
  const durationMinutes = Math.floor(durationMs / (1000 * 60));
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  return `${hours}h ${minutes}m`;
};

// Global function to format a Date object into yyyy-mm-dd
export function formatDate(date) {
  console.log(date);

  const year = date?.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0"); // Ensure two-digit day
  return `${year}-${month}-${day}`;
}
