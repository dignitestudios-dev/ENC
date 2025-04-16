import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import EditProfileModal from "../component/Profile/EditProfile";
import ProfileUpdatedModal from "../component/Profile/ProfileUpdated";
import { useLocation, useNavigate } from "react-router-dom";

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileUpdate, setProfileUpdate] = useState(false);
  const navigate=useNavigate("");
  let state=useLocation();
  state=state?.state?.user;
  // console.log(state,"user") 
  return (
    <div className="px-24 py-20 h-screen ">
      <div onClick={()=>navigate(-1)} className="cursor-pointer flex items-center gap-4">
        <FaArrowLeft />
        <h3 className="font-[600] text-[32px]">Profile</h3>
      </div>
      <div className="bg-[#F9FAFA] shadow-lg  rounded-[16px] px-3 py-6 mt-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={state?.profilePicture?state?.profilePicture:"/dr.jpg"} className="w-10 h-10 rounded-full" alt="" />
            <h3 className="font-[500] text-[24px]">{state?.name}</h3>
          </div>
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className={
                "bg-[#F2F2F2] text-black h-[40px] font-[500] text-[16px] px-2 rounded-[6px]"
              }
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className="bg-[#FFFFFF] border border-[#18181829] mt-8 rounded-[6px] py-3 px-3">
          <h3 className="font-[500] text-[24px]">Personal Information</h3>
          <h4 className="font-[500] text-[15px]">email address</h4>
          <p className="font-[400] text-[15px] text-[#18181899]">
          {state?.email}
          </p>
        </div>
      </div>
      <EditProfileModal user={state} isOpen={isOpen} setIsOpen={setIsOpen} setProfileUpdated={setProfileUpdate} />
      <ProfileUpdatedModal setProfileUpdate={setProfileUpdate} profileUpdate={profileUpdate} />
    </div>
  );
}
