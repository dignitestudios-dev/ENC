import React from "react";
import BlogsList from "./BlogsList";
import { useAppointment } from "../../hooks/api/Get";

export default function Blogs() {
  const blogs = useAppointment("blogs", 1);
  return (
    <>
      {blogs?.data?.length > 0 && (
        <div className="w-full flex  flex-col items-center pt-5 md:px-2 lg:pt-10 md:h-[70vh] all-colors relative">
          <h2 className="text-4xl xl:text-6xl font-bold text-center leading-[50px] text-white">
            Blogs
          </h2>
          <p></p>
          <div className="w-full px-5 mt-0 md:mt-10">
            <BlogsList data={blogs?.data} />
          </div>
        </div>
      )}
    </>
  );
}
