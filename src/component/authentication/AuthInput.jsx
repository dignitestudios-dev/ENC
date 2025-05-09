import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export default function AuthInput({
  text,
  name,
  type,
  holder,
  value,
  handleChange,
  handleBlur,
  error,
  touched,
  forgetPassword,
  dissabled,
}) {
  const [isPassVisible, setIsPassVisible] = useState(false);

  return (
    <div className="w-full  h-auto flex   flex-col gap-1 justify-start items-start  ">
      <div className="flex justify-between w-full items-center">
        <label className="ml-1 text-[16px] font-[700] text-black capitalize">
          {text}
        </label>
        {forgetPassword && (
          <NavLink
            to={"/forgot-password"}
            className={"text-[12px] font-[400] text-[#3C043A]"}
          >
            Forgot Password?
          </NavLink>
        )}
      </div>
      <div
        className={`h-[49px] flex justify-start bg-[#F8F8F899] items-start w-full relative border-[0.8px] rounded-[8px] focus-within:border-[#3C043A] ${
          error && touched ? "border-red-500" : "border-[#D9D9D9]"
        }`}
      >
        <div
          className={` w-full  h-full flex  items-center justify-center  rounded-[12px] relative`}
        >
          <input
            type={isPassVisible ? "text" : type}
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            disabled={dissabled}
            onBlur={handleBlur}
            className={`w-full h-[49px] bg-transparent outline-none border-0 focus-within:border-[#3C043A] rounded-[8px] text-[#262626] px-3 text-[16px] font-normal leading-[20.4px] ${
              error && touched ? "border-red-500" : ""
            } `}
            placeholder={holder}
          />
          <button
            type="button"
            onClick={() => setIsPassVisible((prev) => !prev)}
            className="absolute top-4 text-lg right-2"
            style={{
              color: "#6B7373",
            }}
          >
            {type == "password" &&
              (!isPassVisible ? <BsEyeSlash /> : <BsEye />)}
          </button>
        </div>
      </div>
      {error && touched ? (
        <p className="text-red-700 text-sm font-medium">{error}</p>
      ) : null}
    </div>
  );
}
