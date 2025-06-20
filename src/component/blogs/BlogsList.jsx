import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
export default function BlogsList({data}) {
 
  return (
    <div>
      <Swiper
        // slidesPerView={3}
        spaceBetween={60}
        freeMode={true}
        autoplay={true}
        breakpoints={{
          576: {
            slidesPerView: 1, // 3 slides visible for small screens like phones (width >= 576px)
          },
          768: {
            slidesPerView: 1, // 1 slide visible for tablets and above (width >= 768px)
          },
          1024: {
            slidesPerView: 2, // 4 slides visible for larger tablets and smaller desktops (width >= 1024px)
          },
          1200: {
            slidesPerView: 2, // 5 slides visible for medium-sized desktops (width >= 1200px)
          },
          1400: {
            slidesPerView: 3, // 6 slides visible for larger desktops (width >= 1400px)
          },
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper "
      >
        {data?.map((item, i) => (
          <SwiperSlide key={i} className="rounded-lg">
            <div className="w-full flex flex-col    justify-center rounded-xl shadow-xl">
              <div className="w-full  h-[30vh] flex  items-center gap-5">
                <img src={item?.media} alt="" className="!w-full " />
              </div>
              <div className="px-2 mt-2">
                <h2 className="text-start font-bold">{item?.title}</h2>
                <p className=" pb-5 text-start">
              {item?.content}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
