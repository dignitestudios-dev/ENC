import React from "react";
import AuthSubmitBtn from "../../component/authentication/AuthSubmitBtn";
import { useNavigate } from "react-router-dom";

export default function Verify() {
  const navigate = useNavigate();
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-screen h-screen flex items-center justify-start">
      <form
        onSubmit={(e) => {
          navigate("/reset-password");
          e.preventDefault();
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
            {arr.map((item) => (
              <input
                key={item}
                className="flex-1 min-w-[50px] max-w-[66px] h-[60px] rounded-xl bg-transparent outline-none text-center border border-[#c2c6cb] text-3xl focus:bg-[#D0FCB333] focus-within:border-[#55C9FA]"
                maxLength={1}
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
                className="outline-none text-[13px] border-none text-[#212935] font-bold"
              >
                Resend now
              </button>
            </div>
          </div>
          <AuthSubmitBtn text={"Verify"} />
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
