
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import smvduImage1 from "../../../public/6.jpg"
import smvduImage2 from "../../../public/15.jpg"

import vaishnoMandir from "../../../public/background1.jpg"
import katra from "../../../public/background5.jpg"
import sanasarLake from "../../../public/Sanasar_Lake.jpeg"
import patnitop from "../../../public/Patnitop-1-1.webp"
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
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className='w-full h-[600px]  bg-cover bg-center bg-no-repeat static' style={{ backgroundImage: `url(${smvduImage1})` }} >
             <div className='background-details absolute bottom-10 left-10  p-6 rounded-xl text-xl font-regular bg-gradient-to-r from-sky-800  to-orange-500  text-white  w-5/6 sm:w-[500px] md:w-[700px] lg:w-[900px]'>
                 Shri Mata Vaishno Devi University , Jammu & Kashmir
             </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[600px]  bg-cover bg-center bg-no-repeat static'   style={{ backgroundImage: `url(${smvduImage2})` }}>
          <div className='background-details absolute bottom-10 left-10  p-6 rounded-xl text-xl font-regular bg-gradient-to-r from-sky-800  to-orange-500 text-white w-5/6 sm:w-[500px] md:w-[700px] lg:w-[900px] '>
                 Shri Mata Vaishno Devi University , Jammu & Kashmir
                 </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[600px]  bg-cover bg-center bg-no-repeat static '   style={{ backgroundImage: `url(${vaishnoMandir})` }}>
          <div className='background-details absolute bottom-10 left-10  p-6 rounded-xl text-xl font-regular bg-gradient-to-r from-sky-800  to-orange-500 text-white w-5/6 sm:w-[500px] md:w-[700px] lg:w-[900px]'>
                 Vaishno Mata Temple , Katra
                 </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[600px]  bg-cover bg-center bg-no-repeat static'   style={{ backgroundImage: `url(${katra})` }}>
          <div className='background-details absolute bottom-10 left-10  p-6 rounded-xl text-xl font-regular bg-gradient-to-r from-sky-800  to-orange-500  text-white w-5/6 sm:w-[500px] md:w-[700px] lg:w-[900px]'>
                 Katra, Jammu & Kashmir
                 </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[600px]  bg-cover bg-center bg-no-repeat static'   style={{ backgroundImage: `url(${sanasarLake})` }}>
          <div className='background-details absolute bottom-10 left-10  p-6 rounded-xl text-xl font-regular bg-gradient-to-r from-sky-800  to-orange-500 text-white w-5/6 sm:w-[500px] md:w-[700px] lg:w-[900px]'>
                 Sanasar Lake , Patnitop , Jammu & Kashmir
                 </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-[600px]  bg-cover bg-center bg-no-repeat static'   style={{ backgroundImage: `url(${patnitop})` }}>
          <div className='background-details absolute bottom-10 left-10  p-6 rounded-xl text-xl font-regular bg-gradient-to-r from-sky-800  to-orange-500 text-white w-5/6 sm:w-[500px] md:w-[700px] lg:w-[900px]'>
                 Patnitop , Jammu & Kashmir
                 </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
