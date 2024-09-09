import React from 'react'
import { motion } from 'framer-motion'
import smvdu_image from "../../../public/university.jpg"
const AboutSmvdu = () => {
  return (
    <section className='about-con-section flex flex-col md:flex-row justify-center items-center  gap-y-5'>
   
    <div className='w-full md:w-3/6'>
        <motion.h1 initial={{x:-400}} whileInView={{x:0}} viewport={{once:true}} className='text-3xl text-orange-500 font-bold mb-4 text-center'> About SMVDU</motion.h1> 
        <div className='flex '>
          <div className='w-2/6 flex justify-center items-center'>
            <img src={smvdu_image} alt="" />
          </div>
          <div className='w-4/6'> <p className='text-xl text-regular '>Shri Mata Vaishno Devi University was established under an Act of J&K State Legislature in 1999 as fully residential and technical university, the first of its kind in J&K. Recognized by UGC under Section 2(f) & 12(B) of the UGC Act of 1956, the university receives funding from UGC. The university ranked 78th among Engineering Institutions and Among Ranked Top 100 Business Schools in National Institutional Ranking Framework (NIRF 2020) declared by the MHRD, Govt. of India.</p></div>
        </div>
       
     </div>
</section>
  )
}

export default AboutSmvdu