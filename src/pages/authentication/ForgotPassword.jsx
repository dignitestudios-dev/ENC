import React, { useContext } from "react";
import AuthInput from "../../component/authentication/AuthInput";
import AuthSubmitBtn from "../../component/authentication/AuthSubmitBtn";
import { useNavigate } from "react-router";
import { IoMdArrowBack } from "react-icons/io";
import { useFormik } from "formik";
import { forgotSchema } from "../../schema/authentication/AuthSchema";
import { forgotValues } from "../../init/authentication/AuthValues";
import { useForgetPassword } from "../../hooks/api/Post";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const { loading, postData } = useForgetPassword();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: forgotValues,
      validationSchema: forgotSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        const data = {
          email: values?.email,
          role: "user",
        };
        postData("auth/forgot", false, null, data, "");
      },
    });
  return (
    <>
      <div className="flex w-full h-screen overflow-hidden">
        <div className="w-full flex flex-col justify-center  h-full items-center ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // navigate("/verify-email")
              handleSubmit(e);
            }}
            className="bg-white px-5 lg:px-0 w-full lg:w-[400px] flex flex-col justify-start  gap-8"
          >
            <div className=" ">
              <div
                onClick={() => {
                  navigate(-1);
                }}
              >
                <IoMdArrowBack size={25} className="text-[#A82E75]" />
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
                name={"email"}
                error={errors.email}
                handleBlur={handleBlur}
                handleChange={handleChange}
                touched={touched?.email}
                value={values.email}
              />
            </div>
            <div className="gap-4 w-full">
              <AuthSubmitBtn text={"Send OTP"} loading={loading} />
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
