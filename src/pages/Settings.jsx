import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import LogOutModal from "../component/authentication/LogOutModal";
import ChangedPasword from "../component/authentication/ChangedPassword";
import PasswordUpdateModal from "../component/authentication/PasswordUpdateModal";
import PrivacyPolicyModal from "../component/settings/PrivacyPolicyModal";
import TermsConditionModal from "../component/settings/TermsConditionModal";
import { useNavigate } from "react-router-dom";

export default function Setting() {
  const [logout, setIsLogout] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [PasswordUpdate, setPasswordUpdate] = useState(false);
  const [PrivacyModal, setPrivacyModal] = useState(false);
  const [TermCondtition, setTermCondtition] = useState(false);
  const navigate=useNavigate("");
  return (
    <div className="px-4 md:px-24 py-20 h-screen ">
      <div onClick={()=>navigate(-1)} className="cursor-pointer flex items-center gap-4">
        <FaArrowLeft />
        <h3 className="font-[600] text-[32px]">Settings</h3>
      </div>
      <div className="bg-[#F9FAFA]  rounded-[16px] px-3 py-6 mt-3">
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex cursor-pointer  bg-[#FFFFFF] px-5 py-5 justify-between rounded-[8px] h-[45px] items-center"
        >
          <p className="font-[500] text-[14px] capitalize">change password</p>
          <button>
            <MdOutlineKeyboardArrowRight size={20} />
          </button>
        </div>
        <div onClick={()=>setTermCondtition(!TermCondtition)} className="flex mt-3 cursor-pointer  bg-[#FFFFFF] px-5 py-5 justify-between rounded-[8px] h-[45px] items-center">
          <p className="font-[500] text-[14px] capitalize">
            terms & conditions
          </p>
          <button>
            <MdOutlineKeyboardArrowRight size={20} />
          </button>
        </div>
        <div onClick={()=>setPrivacyModal(!PrivacyModal)} className="flex mt-3 cursor-pointer  bg-[#FFFFFF] px-5 py-5 justify-between rounded-[8px] h-[45px] items-center">
          <p className="font-[500] text-[14px] capitalize">privacy policy</p>
          <button>
            <MdOutlineKeyboardArrowRight size={20} />
          </button>
        </div>
        <div
          onClick={() => {
            setIsLogout(!logout);
          }}
          className="flex mt-3 cursor-pointer  bg-[#FFFFFF] px-5 py-5 justify-between rounded-[8px] h-[45px] items-center"
        >
          <p className="font-[500] text-[14px] capitalize text-[#E11616]">
            log out
          </p>
          <button>
            <MdOutlineKeyboardArrowRight size={20} />
          </button>
        </div>
      </div>
      <LogOutModal setLogOutModal={setIsLogout} logOutModal={logout} />
      <ChangedPasword
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setPasswordUpdate={setPasswordUpdate}
        PasswordUpdate={PasswordUpdate}
      />
      <PasswordUpdateModal
        PasswordUpdate={PasswordUpdate}
        setPasswordUpdate={setPasswordUpdate}
      />
      <PrivacyPolicyModal PrivacyModal={PrivacyModal} setPrivacyModal={setPrivacyModal} />
      <TermsConditionModal setTermCondtition={setTermCondtition} termCondtition={TermCondtition}  />
    </div>
  );
}
