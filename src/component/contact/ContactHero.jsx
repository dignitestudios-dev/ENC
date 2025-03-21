import React from "react";
import { NavLink } from "react-router-dom";

const ContactHero = () => {
  return (
    <div className="mt-[220px]  w-full ">
      <div className="w-full  flex flex-col px-2  items-center   justify-center gap-4 text-center pt-12 ">
        <h2 className="text-4xl lg:text-5xl font-bold text-white ">
          Why Choose ENC?
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 px-5 lg:px-20 py-20 gap-y-12 text-white ">
        <div className="w-full flex flex-col gap-4 border-b lg:border-r border-white lg:px-6 lg:border-b-0">
          <p className="text-lg">
            <span className="font-bold">Personalized Approach:</span> We
            understand that every individual’s journey is unique. Our services
            are customized to meet each client’s specific needs, goals, and
            circumstances.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 border-b lg:border-r border-white lg:px-6 lg:border-b-0">
          <p className="text-lg">
            <span className="font-bold">Proven Impact:</span> Our work has
            changed lives, careers, and communities. From guiding stroke
            survivors to advocating for public policy changes, our impact is
            both local and global.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 border-b lg:border-r border-white lg:px-12 lg:border-b-0">
          <p className="text-lg">
            <span className="font-bold">Trusted Network:</span> Our extensive
            network of professionals, advocates, and community leaders ensures
            that our clients have access to the best resources and opportunities
            available.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 lg:px-6">
          <p className="text-lg">
            <span className="font-bold">Join Our Circle:</span> Empowerment is
            not a destination—it's a journey. We invite you to join our circle
            and be a part of a community that champions growth, courage, and
            change. Whether you’re seeking career support, advocacy, or
            community engagement, ENC is here to walk with you every step of the
            way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
