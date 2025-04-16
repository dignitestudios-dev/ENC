import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useLogout } from "../../hooks/api/Post";
const LogOutModal = ({ logOutModal, setLogOutModal }) => {
  const navigate = useNavigate("");
  const { postData } = useLogout();
  return (
    logOutModal && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 bottom-0 z-30 px-4">
        <div className="bg-[#FFFFFF] backdrop-blur-[100px] w-[410px] py-5  rounded-[12px] ">
          <div className="flex items-start flex-col px-8 justify-center gap-y-4 h-full">
            <div className="flex flex-col gap-y-2 items-start">
              {/* <img src={Checkbox} alt="" /> */}
              <h3 className="text-2xl text-[#181818]">Log Out</h3>
            </div>
            <p className="text-center text-wrap text-[#18181880]">
              Are you sure you want to logout?
            </p>
            <div className="flex items-center justify-center gap-5 ">
              <button
                onClick={() => {
                  setLogOutModal(!logOutModal);
                }}
                className="bg-[#21293514] text-[#212935] text-sm px-4 py-1 rounded-[14px] w-[140px] h-[44px]"
              >
                No
              </button>
              <button
                onClick={() => {
                  postData("auth/logout", null, null, null);
                  setLogOutModal(!logOutModal);
                  Cookies.remove("auth");
                  navigate("/login");
                }}
                className="w-[140px] h-[44px] rounded-[14px] bg-[#EE3131] text-white flex gap-2 items-center justify-center text-md font-medium"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default LogOutModal;
