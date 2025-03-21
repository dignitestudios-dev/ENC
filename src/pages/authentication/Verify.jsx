import React from "react";

export default function Verify() {
  return (
    <>
      <div className="flex w-full h-screen overflow-hidden">
        <div className="w-full flex flex-col justify-center  h-full items-center ">
          <div className="mx-auto text-center px-4 lg:px-0 lg:w-[350px]">
            <img src="/check.png" className="w-24 mx-auto mb-4" alt="check.png" />
            <h1 className=" text-4xl font-bold text-black capitalize">check your email</h1>
            <p className="text-[14px] mt-3 text-[#868686]">
              We have sent a password recover instructions to your email.
            </p>
            <button
              type="submit"
              className="bg-[#E7E7E8] mt-3 text-[#9E9E9E] font-[500] h-[44px] w-full rounded-[4px] text-[16px]"
            >
              Resend Code (00:17s)
            </button>
          </div>
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
}
