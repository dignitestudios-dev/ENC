import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full  bg-[#49274a] flex flex-col lg:flex-row  items-center lg:justify-center lg:px-24 gap-y-5 py-4 lg:py-6">
      <h2 className="text-white font-medium text-center">
        Empowerment Network Circle (ENC) © 2024. All Rights Reserved.
      </h2>
      {/* <div className="space-x-5 flex">
        <a href="">
          <FaFacebook className="w-7 h-5 text-white" />
        </a>
        <a href="">
          <SiInstagram className="w-7 h-5 text-white" />
        </a>
        <a href="">
          <FaTwitter className="w-7 h-5 text-white" />
        </a>
      </div> */}
    </div>
  );
};

export default Footer;
