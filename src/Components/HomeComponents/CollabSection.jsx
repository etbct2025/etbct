import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const CollabSection = () => {
  return (
    <div className="flex flex-col gap-y-10 ">
      <div className="text-center text-4xl font-bold text-orange-500">
        <h1 >In Collaborations with</h1>
      </div>
      <div className="px-16  ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
      pagination={{ clickable: true }}
      
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className=" flex justify-center items-center rounded-xl hover:scale-110 transition-all duration-300 ease-in-out p-4"> 
              <img className="w-32 h-32 sm:w-64 sm:h-64" src="../../public/iit.jpeg" alt="" />   
          </SwiperSlide> 
          <SwiperSlide className=" flex justify-center items-center rounded-xl hover:scale-110 transition-all duration-300 ease-in-out p-4">
              <img className="w-32 h-32 sm:w-64 sm:h-64" src="../../public/iiim.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className=" flex justify-center items-center rounded-xl hover:scale-110 transition-all duration-300 ease-in-out p-4">
              <img className="w-32 h-32 sm:w-64 sm:h-64" src="../../public/brsi.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CollabSection;
