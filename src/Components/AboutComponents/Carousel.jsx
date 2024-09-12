import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import bg6 from "../../../public/banner/bg6.jpg";

import bg1 from "../../../public/banner/bg1.png";

import bg5 from "../../../public/banner/bg5.jpg";

import bg4 from "../../../public/banner/bg4.jpg";
import bg2 from "../../../public/banner/bg2.jpg";

import bg3 from "../../../public/banner/bg3.jpg";

import bg7 from "../../../public/banner/bg7.jpg";

import bg8 from "../../../public/banner/bg8.jpg";

const Carousel = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true} // Enable infinite looping
        autoplay={{
          delay: 3000, // Delay between slides in ms
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div
           
          >
            <img className="w-full h-[400px] md:h-[600px] object-cover" src={bg1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
           
          >
            <img className="w-full h-[400px] md:h-[600px] object-cover" src={bg2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
           
          >
            <img className="w-full h-[400px] md:h-[600px] object-cover " src={bg3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
           
          >
            <img className="w-full h-[400px] md:h-[600px] object-cover" src={bg4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
           
          >
            <img className="w-full h-[400px] md:h-[600px] object-cover" src={bg5} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
           
          >
            <img className="w-full h-[400px] md:h-[600px] object-cover" src={bg6} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
           
          >
            <img className="w-full h-[400px] md:h-[600px] object-cover" src={bg7} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
           
          >
            <img className="w-full h-[400px] md:h-[600px] object-cover" src={bg8} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
