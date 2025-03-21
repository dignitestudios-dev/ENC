import React from "react";
import AuthInput from "../authentication/AuthInput";

export default function Step3({ setStep ,setIsAppointment,setIsPaymentMethod}) {
  return (
    <div className="py-2">
      <h4 className="text-[18px] text-[#212121] font-[600] mb-1">
        Help Us Personalize Your Session
      </h4>
      <p className="text-[#181818B2] font-[400] text-[12px]">
        Answer a few quick questions so we can better understand your needs.
      </p>
      <form className="flex flex-col gap-1 ">
        <div className="mt-1">
          <p className="font-[500] text-[13px] text-[#181818]">
            1- What is the primary reason for your appointment?
          </p>
          <label
            htmlFor=""
            className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]"
          >
            <input type="radio" name="" id="" />
            Career Coaching & Professional Development
          </label>
          <label
            htmlFor=""
            className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]"
          >
            <input type="radio" name="" id="" />
            Disability Advocacy & Support
          </label>
          <label
            htmlFor=""
            className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]"
          >
            <input type="radio" name="" id="" />
            Personal Growth & Mentorship
          </label>
          <label
            htmlFor=""
            className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]"
          >
            <input type="radio" name="" id="" />
            Other
          </label>
        </div>
        <div className="mt-1">
          <p className="font-[500] text-[13px] text-[#181818]">
            2- Do you require any special accommodations for this session?
          </p>
          <label
            htmlFor=""
            className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]"
          >
            <input type="checkbox" name="" id="" />
            Yes, I need closed captioning during the meeting.
          </label>
          <label
            htmlFor=""
            className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]"
          >
            <input type="checkbox" name="" id="" />
            Yes, I require an accessible meeting format (e.g., text-based or
            voice-only).
          </label>
          <label
            htmlFor=""
            className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]"
          >
            <input type="checkbox" name="" id="" />
            No special accommodations needed.
          </label>
        </div>
        <div className="mt-1">
          <p className="font-[500] text-[13px] text-[#181818]">
            3- Have you attended an ENC session before?
          </p>
          <label
            htmlFor=""
            className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]"
          >
            <input type="radio" name="" id="" />
            Yes
          </label>
          <label
            htmlFor=""
            className="flex items-center gap-2 mt-2 font-[400] text-[13px] text-[#181818]"
          >
            <input type="radio" name="" id="" />
            No, this is my first session
          </label>
        </div>
        <div className="mt-1">
          <p className="font-[500] text-[13px] text-[#181818]">
            4- What specific goals or topics would you like to discuss?
            (optional)
          </p>
          <textarea
            rows={3}
            className={`w-full py-2 resize-none mt-2 outline-none border bg-white rounded-[4px] placeholder:text-[13px] placeholder:font-normal placeholder:text-[#6B737E] text-black bg-transparent h-full px-3 text-sm font-medium `}
            id=""
          ></textarea>
        </div>
        <div className="mt-3 w-full">
          <button
            onClick={() => {
              setIsAppointment(false);
              setStep(1);
              setIsPaymentMethod(true)
            }}
            className="bg-black w-full text-white px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
