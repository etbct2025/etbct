import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import vc_profile from "../../../public/VC.jpg"
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const KeyPersons = () => {
  return (
    <div className="key-person-section py-16">
      <div className="text-4xl font-bold text-center mb-10 text-orange-500 ">
        <h1> Key Persons </h1>
      </div>

      <div className="px-16 flex justify-center gap-x-10">
        <motion.div whileHover={{scale:1.1}} className="  border rounded-xl ">
          <div ><img className="rounded-t-xl" src={vc_profile} alt="" /></div>
          <div className="py-2">
             <h1 className="text-xl text-yellow-500 text-center">Prof. (Dr.) Pragati Kumar</h1>
             <p className="text-lg text-center">Vice Chancellor, SMVDU</p>
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl">
          <div><img className="rounded-t-xl" src={vc_profile} alt="" /></div>
          <div className="py-2">
             <h1 className="text-xl text-yellow-500 text-center">Prof. (Dr.) Pragati Kumar</h1>
             <p className="text-lg text-center">Vice Chancellor, SMVDU</p>
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl">
          <div><img className="rounded-t-xl" src={vc_profile} alt="" /></div>
          <div className="py-2">
             <h1 className="text-xl text-yellow-500 text-center">Prof. (Dr.) Pragati Kumar</h1>
             <p className="text-lg text-center">Vice Chancellor, SMVDU</p>
          </div>
        </motion.div>
        {/* <Swiper
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
          <SwiperSlide className="  py-4 "> 
                 <div className='flex  justify-center items-center mb-2'>
                     <img className='rounded-[50%] w-32 h-32 object-cover' src="../../public/Jitendra Singh_1.jpg" alt="" />
                 </div>
                 <div className='flex flex-col justify-center items-center '>
                     <h1 className='text-2xl font-bold'>Dr. Jatindar Singh</h1>
                     <h3 className='text-2xl font-regular'>Minister of State , DST </h3>
                 </div>
          </SwiperSlide> 
          <SwiperSlide className="  py-4 "> 
                 <div className='flex  justify-center items-center mb-2'>
                     <img className='rounded-[50%] w-32 h-32 object-cover' src="../../public/vc.jpg" alt="" />
                 </div>
                 <div className='flex flex-col justify-center items-center '>
                     <h1 className='text-2xl font-bold'>Prof. R.K. Sinha</h1>
                     <h3 className='text-2xl font-regular'>Vice Chancellor , SMVDU </h3>
                 </div>
          </SwiperSlide> 
          <SwiperSlide className="  py-4 "> 
                 <div className='flex  justify-center items-center mb-2'>
                     <img className='rounded-[50%] w-32 h-32 object-cover' src="../../public/iitjd.jpg" alt="" />
                 </div>
                 <div className='flex flex-col justify-center items-center '>
                     <h1 className='text-2xl font-bold'>Dr. Manoj Singh Gaur</h1>
                     <h3 className='text-2xl font-regular'>Director , IIT Jammu</h3>
                 </div>
          </SwiperSlide> 
          <SwiperSlide className="  py-4 "> 
                 <div className='flex  justify-center items-center mb-2'>
                     <img className='rounded-[50%] w-32 h-32 object-cover' src="../../public/iimd.jpg" alt="" />
                 </div>
                 <div className='flex flex-col justify-center items-center '>
                     <h1 className='text-2xl font-bold'>Dr. Srinivasa Reddy</h1>
                     <h3 className='text-2xl font-regular'>Director , CSIR IIIM Jammu</h3>
                 </div>
          </SwiperSlide> 
          <SwiperSlide className="  py-4 "> 
                 <div className='flex  justify-center items-center mb-2'>
                     <img className='rounded-[50%] w-32 h-32 object-cover' src="../../public/bsrid.jpg" alt="" />
                 </div>
                 <div className='flex flex-col justify-center items-center '>
                     <h1 className='text-2xl font-bold'>Prof. Ashok Pandey</h1>
                     <h3 className='text-2xl font-regular'>Chief Mentor , BSRI</h3>
                 </div>
          </SwiperSlide> 
          <SwiperSlide className="s  py-4 "> 
                 <div className='flex  justify-center items-center mb-2'>
                     <img className='rounded-[50%] w-32 h-32 object-cover' src="../../public/sharda.jpeg" alt="" />
                 </div>
                 <div className='flex flex-col justify-center items-center '>
                     <h1 className='text-2xl font-bold'>Dr. Sharada M. Potukuchi</h1>
                     <h3 className='text-2xl font-regular'>Dean , Academic Affairs , SMVDU</h3>
                 </div>
          </SwiperSlide> 
        </Swiper> */}
      </div>
    </div>
  );
};

export default KeyPersons;
