import React from "react";
import { FaPeopleArrows, FaPeopleGroup, FaQuoteRight } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { LiaFistRaisedSolid } from "react-icons/lia";
import { LuHeartHandshake } from "react-icons/lu";
import { RiBookShelfLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";

const  Services = () => {
  return (
    <div className="py-20 px-6  lg:px-36 ">
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
        className="mySwiper"
      >
        <SwiperSlide className="rounded-lg">
          <div className="w-full flex flex-col px-8  items-center justify-center rounded-xl shadow-xl">
            <div className="w-full  h-[18vh] flex  items-center gap-5">
              <img
                src="/muhammad_ali.jpg"
                alt=""
                className="!w-[70px] !h-[70px] rounded-full"
              />
              <h3 className="text-2xl font-semibold">Muhammad Ali</h3>
            </div>

            <p className=" pb-5">
              “It’s the repetition of affirmations that leads to belief. And
              once that belief becomes a deep conviction, things begin to
              happen.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="w-full flex flex-col px-8  items-center justify-center rounded-xl shadow-xl">
            <div className="w-full  h-[18vh] flex items-center gap-3 ">
              <img
                src="/images (1).jpg"
                alt=""
                className="!w-[70px] !h-[70px] rounded-full"
              />
              <h3 className="text-2xl font-semibold">Martina Navratilova</h3>
            </div>

            <p className=" pb-5">
              “Your success and happiness lies in you. Resolve to keep happy,
              and your joy and you shall form an invincible host against
              difficulties.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="w-full flex flex-col px-8  items-center justify-center rounded-xl shadow-xl">
            <div className="w-full  h-[18vh] flex items-center gap-5  ">
              <img
                src="/images (3).jpg"
                alt=""
                className="!w-[70px] !h-[70px] rounded-full"
              />
              <h3 className="text-2xl font-semibold">Mark Haddon</h3>
            </div>

            <p className=" pb-5">
              “For me, disability is a way of getting some extremity, some kind
              of very difficult situation, that throws an interesting light on
              people.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="w-full flex flex-col px-8  items-center justify-center rounded-xl shadow-xl">
            <div className="w-full  h-[16vh] flex gap-3 items-center  ">
              <img
                src="/images (2).jpg"
                alt=""
                className="!w-[70px] !h-[70px] rounded-full"
              />
              <h3 className="text-2xl font-semibold">Nick Vujicic</h3>
            </div>

            <p className=" pb-2">
              “I’m officially disabled, but I’m truly enabled because of my lack
              of limbs. My unique challenges have opened up unique opportunities
              to reach so many in need.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="w-full flex flex-col px-8  items-center justify-center rounded-xl shadow-xl">
            <div className="w-full h-[22vh] flex gap-4 items-center  ">
              <img
                src="/images.jpg"
                alt=""
                className="!w-[70px] !h-[70px] rounded-full"
              />
              <h3 className="text-2xl font-semibold">Jimmy Dean</h3>
            </div>

            <p className=" pb-5">
              “I can’t change the direction of the wind, but I can adjust my
              sails to always reach my destination.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="w-full flex flex-col px-8  items-start justify-start rounded-xl shadow-xl">
            <div className="w-full h-[22vh] flex gap-2 items-center ">
              <img
                src="/swiper1.jpg"
                alt=""
                className="!w-[70px] !h-[70px] rounded-full"
              />
              <h3 className="text-2xl font-semibold">Martina Navratilova</h3>
            </div>

            <p className=" pb-5">
              “Disability is a matter of perception. If you can do just one
              thing well, you’re needed by someone.”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    // <div className="w-full flex flex-col items-start px-6 lg:px-32 py-10">
    //   <div className="w-full flex flex-col items-start py-10 ">
    //     <h2 className="text-6xl font-extrabold "></h2>
    //   </div>
    //   <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
    //     <div className="flex flex-col px-4 py-4 gap-6 rounded-xl shadow-xl">
    //       <div className="flex flex-col items-start gap-2 pt-4">
    //         <h3 className="text-2xl font-semibold">Martina Navratilova</h3>
    //       </div>
    //       <p className=" pb-5">
    //         “Disability is a matter of perception. If you can do just one thing
    //         well, you’re needed by someone.” -
    //       </p>
    //     </div>
    //     <div className="flex flex-col px-4 py-4 gap-6 rounded-xl shadow-xl">
    //       <div className="flex flex-col items-start gap-2 pt-4">
    //         <h3 className="text-2xl font-semibold"> Mark Haddon</h3>
    //       </div>
    //       <p className=" pb-5">
    //         “For me, disability is a way of getting some extremity, some kind of
    //         very difficult situation, that throws an interesting light on
    //         people.”
    //       </p>
    //     </div>
    //     <div className="flex flex-col px-4 py-4 gap-6 rounded-xl shadow-xl">
    //       <div className="flex flex-col items-start gap-2 pt-4">
    //         <h3 className="text-2xl font-semibold">Muhammad Ali</h3>
    //       </div>
    //       <p className=" pb-5">
    //         “It’s the repetition of affirmations that leads to belief. And once
    //         that belief becomes a deep conviction, things begin to happen.”{" "}
    //       </p>
    //     </div>
    //     <div className="flex flex-col px-4 py-4 gap-6 rounded-xl shadow-xl">
    //       <div className="flex flex-col items-start gap-2 pt-4">
    //         <h3 className="text-2xl font-semibold"> Nick Vujicic</h3>
    //       </div>
    //       <p className=" pb-5">
    //         “I’m officially disabled, but I’m truly enabled because of my lack
    //         of limbs. My unique challenges have opened up unique opportunities
    //         to reach so many in need.”{" "}
    //       </p>
    //     </div>
    //     <div className="flex flex-col px-4 py-4 gap-6 rounded-xl shadow-xl">
    //       <div className="flex flex-col items-start gap-2 pt-4">
    //         <h3 className="text-2xl font-semibold"> Susan Boyle</h3>
    //       </div>
    //       <p className=" pb-5">
    //         “I was slightly brain damaged at birth, and I want people like me to
    //         see that they shouldn’t let a disability get in the way. I want to
    //         raise awareness – I want to turn my disability into ability.”{" "}
    //       </p>
    //     </div>
    //     <div className="flex flex-col px-4 py-4 gap-6 rounded-xl shadow-xl">
    //       <div className="flex flex-col items-start gap-2 pt-4">
    //         <h3 className="text-2xl font-semibold">Joey Reiman</h3>
    //       </div>
    //       <p className=" pb-5">
    //         .What I learned was that these athletes were not disabled, they were
    //         super–abled. The Olympics is where heroes are made. The Paralympics
    //         is where heroes come.”
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Services;
