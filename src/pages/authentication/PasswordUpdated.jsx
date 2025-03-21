import React from "react";

export default function PasswordUpdated() {
  return (
    <>
      <div className="flex w-full h-screen overflow-hidden">
        <div className="w-full flex flex-col justify-center  h-full items-center ">
          <div className="mx-auto text-center w-[350px]">
            <img
              src="/success.png"
              className="w-24 mx-auto mb-6"
              alt="success.png"
            />
            <h1 className=" text-4xl font-bold text-black capitalize">
              password updated!
            </h1>
            <p className="text-[14px] mt-5 text-[#868686]">
              Your password has been updated successfully.
            </p>           
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
