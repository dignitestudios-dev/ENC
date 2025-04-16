import { useState } from "react";
import axios from "../../axios";
import { processError } from "../../lib/utils";
import { useNavigate } from "react-router";
import { SuccessToast } from "../../component/global/Toaster";
const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const postData = async (
      url,
      isFormData = false,
      formdata = null,
      data = null,
    ) => {
      try {
        setLoading(true);
        const response = await axios.put(url, isFormData ? formdata : data);
        console.log(response);      
        SuccessToast(response?.data?.message)
        return response?.data;
      } catch (error) {
        processError(error);
      } finally {
        setLoading(false);
      }
    };
  
    return { loading, postData };
  };

  export {useSignup}