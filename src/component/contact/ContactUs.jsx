import React from "react";

export default function ContactUs() {
  return (
    <div className="bg-[#AFAFAF] relative flex gap-5 px-10 mt-40 py-10 h-[450px] ">
       
      <div className="flex flex-col w-full justify-between h-full">
        <div>
          <h3 className="font-[500] text-[32px] text-white">
            Have questions or need <br /> assistance?
          </h3>
          <p className="mt-2 font-[400] text-[14px] text-white">
            Contact our support team at <br /> enc@empowermentnetworkcircle.com
          </p>
        </div>
        <div>
          <h3 className="font-[500] text-[16px] text-white">LinkedIn</h3>
          <div className="flex items-center mt-3 gap-3">
            <img src="/linkedIn.png" className="w-8" alt="linkedIn" />
            <p className="font-[400] text-[14px] text-white">
              https://www.linkedin.com/in/rose-m-handon-phd?
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-[500] text-[16px] text-white">Business Phone</h3>
          <div className="flex items-center mt-3 gap-3">
            <img src="/calling.png" className="w-8" alt="linkedIn" />
            <p className="font-[400] text-[14px] text-white">(614) 560-6609</p>
          </div>
        </div>
      </div>
      <div className=" w-full ">
        <div className="bg-white absolute w-[560px] -top-10 px-3 py-5 shadow-[0px_20px_62px_0px_#00000024] rounded-[12px]">
          <h3 className="font-[700] text-[32px]">Get in Touch</h3>
          <p className="text-[20px] font-[400]">You can reach us anytime.</p>
          <form
            className="md:col-span-8 pt-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-wrap -mx-3 ">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block h-[48px] bg-[#FFFFFF] w-full border-[#35353540] border rounded-[4px] py-3 px-4 mb-3 leading-tight focus:bg-white  focus:outline-[#62466B]"
                  id="grid-first-name"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none block w-full bg-[#FFFFFF] border-[#35353540] border rounded-[4px] py-3 px-4 leading-tight focus:bg-white focus:outline-[#62466B]"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 ">
              <div className="w-full px-3 mb-6 md:mb-0 ">
                <input
                  className="appearance-none block w-full bg-[#FFFFFF]  border-[#35353540] border rounded-[4px] py-3 px-4 mb-3 leading-tight  focus:bg-white focus:outline-[#62466B]"
                  id="grid-email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 ">
              <div className="w-full px-3 flex items-center mb-6 md:mb-0 ">     
              <div className="bg-[#FFFFFF] flex items-center justify-center border h-[48px] rounded-[4px] rounded-r-none py-3 px-4 mb-3" >
                   <img src="/flag.png" className="w-10" alt="flag"/>
                </div>          
                <input
                  className="appearance-none block h-[48px] w-full bg-[#FFFFFF]  border-[#35353540] border rounded-[4px] rounded-l-none py-3 px-4 mb-3 leading-tight  focus:bg-white focus:outline-[#62466B]"
                  id="grid-phone"
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 ">
              <div className="w-full px-3">
                <textarea
                  rows={6}
                  className="appearance-none resize-none block w-full bg-[#FFFFFF]  border-[#35353540] border rounded-[4px] py-3 px-4 mb-3 leading-tight  focus:bg-white focus:outline-[#62466B]"
                  defaultValue={""}
                  placeholder="How can we help?"
                />
              </div>
              <div className="flex justify-between w-full px-3">
                <button
                  className="bg-[#000000] mt-3 text-white font-[500] h-[44px] w-full rounded-[4px] text-[16px]" 
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
