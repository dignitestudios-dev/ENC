import React from "react";
import Navber from "../global/Navber";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Hero = () => {
  const navigate = useNavigate("");
  const token = Cookies.get("auth");
  return (
    <div className="   ">
      <div className="w-full  bg-banner flex flex-col   relative ">
        <div className="w-full  flex flex-col pt-40 lg:pt-20   gap-5">
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-7xl text-white text-center">
            Empowering Abilities,
            <br /> Enriching Lives
          </h2>
          <p className="text-white font-medium text-base lg:text-xl text-center">
            Welcome to the Empowerment Network Circle (ENC), a safe space where{" "}
            <br />
            individuals with disabilities are seen, heard, and supported.
          </p>
          {!token && (
            <div className="flex items-center gap-6 justify-center text-white ">
              <button
                onClick={() => navigate("/signup")}
                className="bg-[#000000] font-[500] h-[44px] w-[120px] rounded-[4px] text-[16px]"
              >
                Sign up
              </button>
              <button
                onClick={() => navigate("/login")}
                className="bg-[#000000] font-[500] h-[44px] w-[120px] rounded-[4px] text-[16px]"
              >
                Login
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-cols  justify-center items-center absolute bottom-8 lg:bottom-1 px-2 lg:px-32 lg:gap-x-12 ">
          <img
            src="/istockphoto-1141509310-612x612.jpg"
            alt=""
            className="h-[160px] w-[260px] lg:h-[300px] lg:w-[320px] object-cover border_gradient lg:block hidden"
          />
          <div className="text-center text-white lg:space-y-5 lg:pt-20">
            <h2 className="text-3xl lg:text-5xl font-bold">Our Mission</h2>
            <p className="text-base lg:text-[20px] ">
              At Empowerment Network Circle (ENC), we believe in the
              transformative power of perseverance, community, and opportunity.
              Our mission is to empower individuals with disabilities,
              marginalized communities, and professionals striving to break
              barriers in their personal and professional lives. ENC stands as a
              beacon of hope, advocacy, and empowerment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
