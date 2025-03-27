import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const AuthInput = ({ state, setState, text, type, error, placeholder,forgetPassword,dissabled }) => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  return (
    <div className="w-full h-auto flex   flex-col gap-1 justify-start items-start  ">
      <div className="flex justify-between w-full items-center">
        <label className="ml-1 text-[16px] font-[700] text-black capitalize">
          {text}
        </label>
        {forgetPassword&& (
          <NavLink to={"/forgot-password"} className={"text-[12px] font-[400] text-[#0084FF]"}>
            Forgot Password?
          </NavLink>
        )}
      </div>
      <div
        className={`w-full h-[48px] focus-within:border-[1px] focus-within:border-[#1c1c1c]   rounded-[4px] bg-white flex items-center justify-start  ${
          error && "error"
        } `}
      >
        <div
          className={` w-full  h-full flex items-center justify-center  rounded-[12px] relative`}
        >
          <input
            type={isPassVisible ? "text" : type}
            placeholder={placeholder}
            disabled={dissabled}
            className={`w-full outline-none border ${dissabled?"bg-[#EFEFEF]":"bg-white"}  rounded-[4px] placeholder:text-[13px] placeholder:font-normal placeholder:text-[#6B737E] text-black bg-transparent h-full px-3 text-sm font-medium `}
            value={state}
            onChange={(e) => setState(e.target.value)}
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
    </div>
  );
};

export default AuthInput;
