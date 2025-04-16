import React from "react";
import { PiSpinnerBold } from "react-icons/pi";

const AuthSubmitBtn = ({ text, loading ,dissabled}) => {
  return (
    <div className="w-full h-auto flex flex-col gap-1 justify-start items-start  ">
      <button
        type="submit"
        disabled={dissabled}
        className="bg-[#000000] flex items-center gap-2 justify-center  text-white font-[500] h-[44px] w-full rounded-[4px] text-[16px]"
      >
        {text} {loading && <PiSpinnerBold className="animate-spin"  />}
      </button>
    </div>
  );
};

export default AuthSubmitBtn;
