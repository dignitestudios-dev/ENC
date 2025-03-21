import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import AuthInput from "./AuthInput";
import AuthSubmitBtn from "./AuthSubmitBtn";
const ChangedPasword = ({ isOpen, setIsOpen,setPasswordUpdate,PasswordUpdate }) => {
  return (
    isOpen && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 bottom-0 z-30 px-4">
        <div className="bg-[#FFFFFF] backdrop-blur-[100px] w-[540px] pb-10 pt-4 rounded-[12px] ">
          <div className="flex items-center flex-col px-5 justify-center gap-y-2 h-full">
            <div className="flex w-full justify-end">
              <button onClick={()=>setIsOpen(false)} >
                <IoMdClose  />
              </button>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
              {/* <img src={Checkbox} alt="" /> */}
              <h3 className="text-[36px] font-[600] text-[#181818] capitalize">
                change password
              </h3>
            </div>
            <p className="text-center text-wrap text-[16px] font-[400] text-[#565656]">
              You must enter current password in order to update password.
            </p>
            <form
              className="mt-3 flex flex-col gap-y-4 w-[80%] mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                setPasswordUpdate(!PasswordUpdate);
                setIsOpen(false)
              }}
            >
              <AuthInput
                placeholder={"Enter password here"}
                text={"current password"}
                type={"password"}
              />
              <AuthInput
                placeholder={"Enter new password here"}
                text={"new password"}
                type={"password"}
              />
              <AuthInput
                placeholder={"Re enter password here"}
                text={"confirm password"}
                type={"password"}
              />
              <AuthSubmitBtn text={"Update"} />
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default ChangedPasword;
