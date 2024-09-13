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
      >
        <SwiperSlide>
          <div>
            <img className="w-full h-auto md:h-[600px] object-contain md:object-cover" src={bg1} alt="Banner 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full h-auto md:h-[600px] object-contain md:object-cover" src={bg2} alt="Banner 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full h-auto md:h-[600px] object-contain md:object-cover" src={bg3} alt="Banner 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full h-auto md:h-[600px] object-contain md:object-cover" src={bg4} alt="Banner 4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full h-auto md:h-[600px] object-contain md:object-cover" src={bg5} alt="Banner 5" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full h-auto md:h-[600px] object-contain md:object-cover" src={bg6} alt="Banner 6" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full h-auto md:h-[600px] object-contain md:object-cover" src={bg7} alt="Banner 7" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img className="w-full h-auto md:h-[600px] object-contain md:object-cover" src={bg8} alt="Banner 8" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
