import React, { useEffect, useRef, useState } from "react";
import AuthSubmitBtn from "../../component/authentication/AuthSubmitBtn";
import { useLocation, useNavigate } from "react-router-dom";
import { SuccessToast } from "../../component/global/Toaster";
import { emailVerificationValues } from "../../init/authentication/AuthValues";
import { useForgetPassword, useResetVerification } from "../../hooks/api/Post";
import { PiSpinnerBold } from "react-icons/pi";

export default function Verify() {
  const navigate = useNavigate();
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [timer, setTimer] = useState(30);
  const otpRefs = useRef([]);
  const location = useLocation();

  useEffect(() => {
    let interval;
    if (isResendDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setIsResendDisabled(false);
    }
    return () => clearInterval(interval); 
  }, [isResendDisabled, timer]);
  const { loading, postData } = useForgetPassword();

  const handleResendClick =async() => {
    const data = {
      email: location?.state?.email,
      role: "user",
    };
   const res=await postData("auth/forgot", false, null, data, "");
  //  console.log(res);
   
    setIsResendDisabled(true);
    setTimer(30);
  };

  const [otp, setOtp] = useState(emailVerificationValues.otp);

  const { verifyLoader,verifyOtpPostData } = useResetVerification();

  const handleChange = (e, i) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value) && value !== "") return;
    const otpval = [...otp];
    if (value === "") {
      otpval[i] = "";
      setOtp(otpval);
      if (i > 0) {
        otpRefs.current[i - 1].focus();
      }
    } else {
      otpval[i] = value;
      setOtp(otpval);
      if (value && otpRefs.current[i + 1]) {
        otpRefs.current[i + 1].focus();
      }
    }
  };
  const isOtpComplete = otp.join("").length < 5;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    const data = { email:location?.state?.email,otp: otpValue,role:"user"};
    const response = await verifyOtpPostData("auth/verifyOTP", data);
    if (response?.success) {
      // console.log(response);
      SuccessToast(response?.message);
      navigate("/reset-password");
    } else {
      console.error("OTP verification failed", response?.message);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-start">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="w-full bg-white px-4 py-8 lg:p-20 z-10 flex flex-col overflow-y-auto justify-center items-center gap-8"
      >
        <div className="lg:w-[450px]">
          <div className="flex w-full h-full items-center flex-col">
            <h1 className="text-[36px] font-bold text-black ">Verification</h1>
            <p className="font-normal text-nowrap mb-5 mt-3 text-[16px] text-[#868686] ">
              Please enter OTP code sent to designer@dignitestudios.com
            </p>
          </div>

          <div className="w-full h-auto flex justify-start items-center gap-2 my-2 flex-wrap">
            {otp.map((item, index) => (
              <input
                key={index}
                value={item}
                onChange={(e) => handleChange(e, index)}
                name="otp"
                className="flex-1 min-w-[50px] max-w-[66px] h-[60px] rounded-xl bg-transparent outline-none text-center border border-[#c2c6cb] text-3xl focus:bg-[#D0FCB333] focus-within:border-[#55C9FA]"
                maxLength={1}
                ref={(el) => (otpRefs.current[index] = el)} // Set ref for each input
              />
            ))}
          </div>

          <div className="w-full h-auto gap-1 mt-5 mb-5">
            <div className="w-full lg:w-[434px] flex gap-1 justify-start items-center">
              <span className="text-[13px] font-medium text-[#C2C6CB]">
                Didn't receive a code?
              </span>
              <button
                type="button"
                className="outline-none text-[13px] flex items-center gap-2 border-none text-[#212935] font-bold"
                onClick={handleResendClick}
                disabled={isResendDisabled}
              >
                {isResendDisabled ? `Resend in ${timer}s` : "Resend now"} {loading && <PiSpinnerBold className="animate-spin"  />}
              </button>
            </div>
          </div>
          <AuthSubmitBtn
            dissabled={isOtpComplete}
            loading={verifyLoader}
            text={"Verify"}
          />
        </div>
      </form>

      <div className="hidden w-full lg:flex flex-col justify-center items-center w-1/2 h-full relative">
        <div className="relative flex w-full justify-center items-center h-full mb-28">
          <img
            src={"loginBg.png"}
            alt="login_mockup"
            className="relative w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
