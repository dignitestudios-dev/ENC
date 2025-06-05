import React from "react";
import { NavLink } from "react-router-dom";

const Article = () => {
  return (
    <div className="w-full pb-10">
      <div className="w-[90%] mx-auto  mt-11  py-7   ">
        <div className="w-full  flex flex-col md:px-12 text-white  gap-4 ">
          <div className="w-full text-center py-5">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Here Are A Few Articles Recommended <br /> By Dr. Rose
            </h2>
          </div>
          <div className="w-full flex flex-wrap  items-start lg:items-center justify-start lg:justify-center gap-3 ">
            <NavLink
              target="_blank"
              to={
                "https://www.helpguide.org/wellness/health-conditions/living-well-with-a-disability"
              }
            >
              <button className=" text-left w-[300px] md:w-full  hover:bg-white all-colors hover:text-white font-semibold text-base lg:text-lg rounded-lg px-6 py-2 transition-all duration-300">
                Powerful Article on Disability
              </button>
            </NavLink>
            <NavLink
              target="_blank"
              to={
                "https://www.linkedin.com/posts/disabledbysociety_tuesdaythoughts-disabledbysociety-workplaceculutre-activity-7262090807434792962-y46q?utm_source=share&utm_medium=member_android "
              }
            >
              <button className=" hover:bg-white w-[300px] md:w-full all-colors hover:text-white font-semibold text-base lg:text-lg rounded-lg  px-6 py-2 transition-all duration-300">
                Read LinkedIn Post
              </button>
            </NavLink>
            <NavLink
              target="_blank"
              to={
                "https://www.cbsnews.com/news/jamie-foxx-comedy-special-brain-bleed-stroke/ "
              }
            >
              <button className="w-full px-6 w-[300px] md:w-full hover:bg-white all-colors hover:text-white font-semibold text-base lg:text-lg rounded-lg py-2 transition-all duration-300">
                Jamie Foxx's Inspiring Story
              </button>
            </NavLink>
          </div>
          <div className="w-full flex flex-wrap  items-start lg:items-center justify-start lg:justify-center  gap-3 ">
            <NavLink
              target="_blank"
              to={
                "https://www.handinhandqc.org/blog/problematic-representation-of-people-with-disabilities-in-the-media"
              }
            >
              <button className=" w-[300px] md:w-full text-left hover:bg-white all-colors hover:text-white font-semibold text-base lg:text-lg rounded-lg px-6 py-2 transition-all duration-300">
                Problematic Representation of People with Disabilities in the
                Media
              </button>
            </NavLink>
            <NavLink
              target="_blank"
              to={
                "https://www.un.org/development/desa/disabilities/resources/disability-and-the-media.html#:~:text=The%20role%20of%20the%20media,stereotyped%20and%20not%20appropriately%20represented. "
              }
            >
              <button className="w-[300px] md:w-full hover:bg-white all-colors hover:text-white font-semibold text-base lg:text-lg rounded-lg  px-6 py-2 transition-all duration-300">
                Disability and the Media
              </button>
            </NavLink>
          </div>
          <div className="w-full flex flex-wrap  items-start lg:items-center justify-start lg:justify-center  gap-3 ">
            <NavLink target="_blank" to={"https://ncdj.org/"}>
              <button className="w-[300px] md:w-full text-left hover:bg-white all-colors hover:text-white font-semibold text-base lg:text-lg rounded-lg px-6 py-2 transition-all duration-300">
                National Center on Disability and Journalism
              </button>
            </NavLink>
            <NavLink
              target="_blank"
              to={
                "https://cdrnys.org/blog/disability-dialogue/nothing-about-us-without-us-disability-representation-in-media/ "
              }
            >
              <button className="w-[300px] md:w-full hover:bg-white all-colors hover:text-white font-semibold text-base lg:text-lg rounded-lg  px-6 py-2 transition-all duration-300">
                Nothing About Us Without Us
              </button>
            </NavLink>
            <NavLink target="_blank" to={"https://www.disabilitypride.com/ "}>
              <button className="w-[300px] md:w-full hover:bg-white all-colors hover:text-white font-semibold text-base lg:text-lg rounded-lg  px-6 py-2 transition-all duration-300">
                A Great Cause For The Disabled Community
              </button>
            </NavLink>
            <NavLink
              target="_blank"
              to={"https://blackdoctor.org/dr-dre-stroke/ "}
            >
              <button className="w-[300px] md:w-full hover:bg-white all-colors hover:text-white font-semibold text-base lg:text-lg rounded-lg  px-6 py-2 transition-all duration-300">
                Dr. Dre: Life at 60 After Brain Aneurysm
              </button>
            </NavLink>
            <NavLink
              target="_blank"
              to={
                "https://www.golfdigest.com/story/grayson-murray-pga-tour-sony-open-foundation-2025?itm_source=parsely-api&itm_campaign=more-from-side&itm_content=position-1 "
              }
            >
              <button className="w-[300px] md:w-full hover:bg-white all-colors hover:text-white font-semibold text-base lg:text-lg rounded-lg  px-6 py-2 transition-all duration-300">
                Core Mission Of ENC
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
