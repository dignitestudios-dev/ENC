import React from "react";

const Gallery = () => {
  return (
    <div className="pb-20">
      <div className="w-[90%]  mx-auto   ">
        <div className=" w-full flex items-center justify-center pt-12 px-6 ">
          <h2 className="text-3xl  lg:text-5xl font-bold text-white">
            Key Influencers For ENC
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-12 px-6 lg:px-32 text-white ">
          <div className="text-center space-y-3">
            <img
              className="h-[400px] w-full rounded-lg border_gradient"
              src="/gallery.jpeg "
              alt=""
            />
            <h2>
              Dr. Rose's parents, the Late John Craig who died in 2016 and his
              existing wife Marian.
            </h2>
          </div>
          <div className="text-center space-y-3">
            <img
              class="h-[400px] w-full rounded-lg border_gradient"
              src="/PXL_20240715_121918405.PORTRAIT.ORIGINAL~2 (1).jpg"
              alt=""
            />
            <h2>Dr. Rose's Husband, Mr. William Handon.</h2>
          </div>
          <div className="text-center space-y-3">
            <img
              className="h-[400px] w-full rounded-lg border_gradient"
              src="/IMG_1695934241233.jpg"
              alt=""
            />
            <h2>Dr. Rose's Daughter, the Late Jasmine Handon.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
