import React from "react";

const AboutHero = () => {
  return (
    <div className="  w-full">
      <div className="w-[100%]  ">
        <div className="flex items-center justify-center py-12">
          <div className=" py-10 flex items-center justify-center w-[80%] lg:w-[40%] all-colors shadow">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
              About
            </h2>
          </div>
        </div>

        {/* asad */}
      </div>
      <div className="w-[90%] mx-auto  all-colors shadow  ">
        <div className="w-full  flex flex-col lg:flex-row items-center justify-center py-10 gap-10 lg:gap-20  ">
          <div>
            <img
              src="/dr.jpg"
              alt=""
              className="h-[450px] w-[380px] shadow-xl"
            />
          </div>
          <div className="w-full px-5 lg:w-[40%] flex flex-col  items-start justify-center gap-4 text-white">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Rose M.Handon <br />
              <span className="text-3xl font-extrabold ">(PhD, LSW)</span>
            </h2>
            <p className="text-2xl font-semibold">
              Raising Awareness and Promoting Perseverance
            </p>
            <p className="text-xl">
              Dr. Rose M. Handon is a trailblazing advocate, educator, and
              social work professional dedicated to uplifting individuals with
              disabilities. With an illustrious career spanning over four
              decades, she has consistently demonstrated a profound commitment
              to empowering marginalized communities, particularly individuals
              navigating life after a stroke. As the Chief Executive Director of
              Empowerment Network Circle LLC, Dr. Handon has been at the
              forefront of providing business and career consulting, inspiring
              her clients to break barriers, overcome obstacles, and seize new
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
