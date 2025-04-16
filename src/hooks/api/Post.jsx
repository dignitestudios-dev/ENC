import { useState } from "react";
import axios from "../../axios";
import { processError } from "../../lib/utils";
import { useNavigate } from "react-router";
import { ErrorToast, SuccessToast } from "../../component/global/Toaster";
import Cookies from "js-cookie";
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(response?.data, navigate);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback
  ) => {
    try {
      setLoading(true);

      const response = await axios.post(url, isFormData ? formdata : data);
      // console.log(response);      
      if (typeof callback === "function") {
        // console.log(response?.data, "urls");
        callback(response?.data, navigate);
      }
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useSendEmailVerification = () => {
  const [loading, setLoading] = useState(false);
  const SendOtpPostData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, SendOtpPostData };
};

const useEmailVerification = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const verifyOtpPostData = async (url, data) => {
    try {
      setLoading(true);

      const response = await axios.post(url, data);
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, verifyOtpPostData };
};

const useForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      SuccessToast(response?.data?.message);
      navigate("/verify-email", { state: { email: data.email } });
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

const useResetVerification = () => {
  const [verifyLoader, setLoading] = useState(false);
  const navigate = useNavigate();

  const verifyOtpPostData = async (url, data) => {
    try {
      setLoading(true);

      const response = await axios.post(url, data);
      // console.log(response, "response");

      Cookies.set("token", response?.data?.data?.token, { expires: 7 });
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { verifyLoader, verifyOtpPostData };
};

const useResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      SuccessToast(response?.data?.message);
      return response?.data;
    } catch (error) {
      // console.log(error, "error");
     ErrorToast(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      SuccessToast(response?.data?.message);
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

const useAppointment = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      SuccessToast(response?.data?.message);
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

const useFinanlizeAppointment = () => {
  const finalizeAppointment = async (
    url,
    isFormData = false,
    formdata = null,
    data = null
  ) => {
    try {
      const response = await axios.post(url, isFormData ? formdata : data);
      SuccessToast(response?.data?.message);
      return response?.data;
    } catch (error) {
      processError(error);
    }
  };

  return { finalizeAppointment };
};
const useValidateAppointment = () => {
  const [loading, setLoading] = useState(false);
  const ValidAppointment = async (
    url,
    isFormData = false,
    formdata = null,
    data = null
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      SuccessToast(response?.data?.message);
      return response?.data;
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return {loading,ValidAppointment};
};

export {
  useLogin,
  useSignup,
  useSendEmailVerification,
  useEmailVerification,
  useForgetPassword,
  useResetVerification,
  useResetPassword,
  useLogout,
  useAppointment,
  useFinanlizeAppointment,
  useValidateAppointment,
};
