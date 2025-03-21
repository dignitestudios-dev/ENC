import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import AuthInput from "../authentication/AuthInput";
import AuthSubmitBtn from "../authentication/AuthSubmitBtn";
const EditProfileModal = ({ isOpen, setIsOpen,setProfileUpdated }) => {
  return (
    isOpen && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 bottom-0 z-30 px-4">
        <div className="bg-[#FFFFFF] backdrop-blur-[100px] w-[540px] pb-10 pt-4 rounded-[12px] ">
          <div className="flex items-center flex-col px-5 justify-center gap-y-2 h-full">
            <div className="flex w-full justify-end">
              <button onClick={()=> setIsOpen(false)} >
                <IoMdClose />
              </button>
            </div>
            <div className="flex flex-col gap-y-2 items-center">
              {/* <img src={Checkbox} alt="" /> */}
              <h3 className="text-[36px] font-[600] text-[#181818] capitalize">
                edit profile
              </h3>
            </div>
            <form
              className="mt-3 flex flex-col gap-y-4 w-[80%] mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                setIsOpen(false);
                setProfileUpdated(true);
              }}
            >
              <div className="w-full flex  items-center gap-2  mt-3">
                <label htmlFor="img" className="mx-auto cursor-pointer">
                  <img
                    src={"/editProfile.png"}
                    alt="upload photo"
                    className="w-[80px]"
                  />
                </label>
                <div>
                  <input
                    type="file"
                    id="img"
                    name="img"
                    value={""}
                    className=" bg-transparent hidden rounded-full placeholder:text-[#FFFFFF] outline-none text-white  px-3 text-[14px] font-normal leading-[20.4px]"
                    placeholder="Enter Title"
                  />
                </div>              
              </div>
              <AuthInput text={"Full name"}  type={"text"} />
              <AuthInput text={"email address"} dissabled={true}  placeholder={"designer@dignitestudios.com"} type={"text"} />
              <AuthSubmitBtn text={"Save"} />
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default EditProfileModal;
