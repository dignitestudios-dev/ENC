import { useState } from "react";
import AuthInput from "../../component/authentication/AuthInput";
import AuthSubmitBtn from "../../component/authentication/AuthSubmitBtn";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";
import PasswordUpdateModal from "../../component/authentication/PasswordUpdateModal";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [PasswordUpdate,setPasswordUpdate]=useState(false);
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPasswordUpdate(true)
        }}
        className="w-full  h-full bg-white px-4 py-4 lg:p-20 z-10 flex flex-col overflow-y-auto justify-center items-center gap-8"
      >
        <div className="lg:w-[450px]">
          <button
          type="submit"
          className="w-full flex justify-start items-start flex-col"
        >
          <BiArrowBack className="text-3xl text-black" />
        </button>

          <div className="w-full flex justify-center mb-10 items-center flex-col">
            <h1 className="text-[36px] font-bold capitalize text-black leading-[64.8px] tracking-[-1.2px]">
              create new password
            </h1>
            <p className="text-[#868686]">Enter new password to reset.</p>
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start mb-10 gap-4">
            <AuthInput
              text={"New Password"}
              placeholder={"Enter Password"}
              type={"password"}
            />
            <AuthInput
              text={"Confirm Password"}
              placeholder={"Enter Password"}
              type={"password"}
            />
          </div>

          <AuthSubmitBtn text={"Update "} />
        </div>
      </form>

      <div className="hidden w-full lg:flex flex-col justify-center items-center h-full relative">
        <div className="relative flex justify-center items-center w-full h-full mb-28">
          <img
            src={"/loginBg.png"}
            alt="login_mockup"
            className="relative w-[100%] object-cover h-full "
          />
        </div>
      </div>
      <PasswordUpdateModal PasswordUpdate={PasswordUpdate} setPasswordUpdate={setPasswordUpdate} />
    </div>
  );
};

export default ResetPassword;
