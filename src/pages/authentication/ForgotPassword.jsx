import React, { useContext } from "react";
import AuthInput from "../../component/authentication/AuthInput";
import AuthSubmitBtn from "../../component/authentication/AuthSubmitBtn";
import { useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex w-full h-screen overflow-hidden">
        <div className="w-full flex flex-col justify-center  h-full items-center ">
          <form
            onSubmit={(e) =>{
              e.preventDefault()
              navigate("/verifyEmail")
              }}
            className="bg-white px-5 lg:px-0 w-full lg:w-[400px] flex flex-col justify-start  gap-8"
          >
            <div className=" ">
              <div onClick={()=>{
                navigate(-1)
              }} >
                <IoMdArrowBack size={30} />
              </div>
              <div className="w-full text-start mt-10">
                <h1 className=" text-4xl font-bold text-black">
                  Forgot Password
                </h1>
                <span className="text-[14px] text-[#868686] -mt-3">
                  Please enter your registered email address.
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full h-auto justify-start items-start gap-4  ">
              <AuthInput
                text={"Email Address"}
                placeholder={"Enter email address"}
                type={"email"}
              />
            </div>
            <div className="gap-4 w-full">
              <AuthSubmitBtn text={"Send OTP"} />
            </div>
          </form>
        </div>
        <div className="hidden w-full lg:flex flex-col justify-center bg-[#F9FAFA] items-center h-full relative">
          <div className="relative flex justify-center items-center h-full mb-28">
            <img
              src={"/loginBg.png"}
              alt="login_mockup"
              className="relative w-[80%] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
