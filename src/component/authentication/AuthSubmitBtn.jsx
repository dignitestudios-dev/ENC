import React from "react";

const AuthSubmitBtn = ({ text }) => {
  return (
    <div className="w-full h-auto flex flex-col gap-1 justify-start items-start  ">
      <button
        type="submit"
        className="bg-[#000000]  text-white font-[500] h-[44px] w-full rounded-[4px] text-[16px]" 
      >
        {text}
      </button>
    </div>
  );
};

export default AuthSubmitBtn;
