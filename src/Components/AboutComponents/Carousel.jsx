
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import smvduImage1 from "../../../public/6.jpg"

import university1 from "../../../public/university1.png"
import university2 from "../../../public/uni2.jpg"
import university3 from "../../../public/uni3.jpg"
import university4 from "../../../public/uni4.jpg"
import university5 from "../../../public/uni5.jpg"
import university6 from "../../../public/uni6.jpg"
import university7 from "../../../public/uni7.jpg"
import vaishnoMandir from "../../../public/background1.jpg"
import bg8 from "../../../public/bg8.jpg"
import bg9 from "../../../public/bg9.jpg"
import sanasarLake from "../../../public/Sanasar_Lake.jpeg"
import patnitop from "../../../public/Patnitop-1-1.webp"
import bg7 from "../../../public/bg7.jpg"
const Carousel = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}  // Enable infinite looping
        autoplay={{
          delay: 3000, // Delay between slides in ms
          disableOnInteraction: false, // Continue autoplay after user interaction
         }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className='w-full h-[600px]  bg-cover bg-center bg-no-repeat static ' style={{ backgroundImage: `url(${university1})` }} >
             
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[600px]  bg-cover bg-center bg-no-repeat static '   style={{ backgroundImage: `url(${bg9})` }}>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[600px]  bg-cover bg-center bg-no-repeat static '   style={{ backgroundImage: `url(${university7})` }}>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[600px]  bg-cover bg-center bg-no-repeat static'   style={{ backgroundImage: `url(${bg7})` }}>
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[600px]  bg-cover bg-center bg-no-repeat static'   style={{ backgroundImage: `url(${bg8})` }}>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[600px]  bg-cover bg-center bg-no-repeat static ' style={{ backgroundImage: `url(${smvduImage1})` }} >
             
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
