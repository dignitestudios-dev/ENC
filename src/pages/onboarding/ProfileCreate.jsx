import React from "react";

export default function ProfileCreated() {
  return (
    <div>
      <div className="flex w-full h-screen overflow-hidden">
        <div className="w-full flex flex-col justify-center  h-full items-center ">
          <div className="mx-auto text-center px-4 lg:px-0 lg:w-[350px]">
            <img
              src="/success.png"
              className="w-24 mx-auto mb-4"
              alt="success.png"
            />
            <h1 className=" text-4xl font-bold text-black capitalize">
              Account Created
            </h1>
            <p className="text-[14px] mt-3 text-[#868686]">
              Your profile has been created successfully.
            </p>
            <button
              type="submit"
              className="bg-[#181818] mt-3 text-white font-[500] h-[44px] w-full rounded-[4px] text-[16px]"
            >
              Get Started
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
    </div>
  );
}
