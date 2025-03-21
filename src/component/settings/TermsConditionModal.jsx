import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const TermsConditionModal = ({ termCondtition, setTermCondtition }) => {
  return (
    termCondtition && (
      <div className="w-screen h-screen flex items-center justify-center bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 right-0 bottom-0 z-30 px-4">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-xl w-full mx-4 md:w-[552px] h-auto flex flex-col justify-center items-start relative">
          <button
            onClick={() => setTermCondtition(false)}
            className="absolute top-4 right-4 text-black  hover:text-gray-600"
          >
            <IoMdClose className="text-2xl" />
          </button>
          <h3 className="font-[600] text-start capitalize text-[28px] pb-4">
            terms & conditions
          </h3>
          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div>
              <h2 className="font-[600] text-[16px]">1. Acceptance of Terms</h2>
              <p className="mt-3">
                By accessing or using our mobile application (the "App"), you
                agree to be bound by these Terms of Service. If you do not
                agree, please do not use the App.
              </p>
            </div>
            <div>
              <h2 className="font-[600] text-[16px]">2. User Conduct</h2>
              <h3 className="font-[500] text-[16px] mt-3">You agree not to:</h3>

              <ul className="list-disc text-[16px] font-[400] pl-5 mt-2">
                <li>
                  Do not use the App for illegal or unauthorized purposes.
                </li>
                <li>
                  Do not interfere with the security or functionality of the
                  App.
                </li>
                <li>
                  Do not attempt unauthorized access to the App or its systems.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-[600] text-[16px]">
                3. Intellectual Property
              </h2>
              <p className="mt-2 text-[16px] font-[400]">
                All content and materials on the App, including text, graphics,
                and logos, are the property of its licensors and protected by
                copyright.
              </p>
            </div>
            <div>
              <h2 className="font-[600] text-[16px]">
                4. Disclaimer of Warranties
              </h2>
              <p className="mt-2 text-[16px] font-[400]">
                The App is provided "as is" without any warranties, express or
                implied.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default TermsConditionModal;
