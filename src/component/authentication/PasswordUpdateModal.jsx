import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const PasswordUpdateModal = ({ PasswordUpdate, setPasswordUpdate }) => {

  const navigate=useNavigate("");
  useEffect(() => {
    if (PasswordUpdate) {
      const timer = setTimeout(() => {
          navigate("/login");
          setPasswordUpdate(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [PasswordUpdate]);

  return (
    PasswordUpdate && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 bottom-0 z-30 px-4">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-lg w-full mx-4 md:w-[552px] h-auto md:h-[289px] flex flex-col justify-center items-center relative">
          <button
            onClick={()=>{              
              navigate("/login")
              setPasswordUpdate(false)
            }}
            className="absolute top-4 right-4 text-black  hover:text-gray-600"
          >
            <IoMdClose className="text-2xl" />
          </button>

          <div className="flex justify-center items-center mb-4">
            <div className="rounded-full bg-gradient-to-r from-[#A82E75] to-[#3C043A] p-4 flex items-center justify-center">
              <FaCheck className="text-white   text-4xl" />
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-[20px] mb-2 md:text-[24px]">
            Password Updated!
          </h2>
          <p className="text-sm  text-[#565656]">
            Your password has been Updated Successfully
          </p>
        </div>
      </div>
    )
  );
};

export default PasswordUpdateModal;
