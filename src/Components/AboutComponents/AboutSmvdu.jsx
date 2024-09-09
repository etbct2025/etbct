import React from 'react'
import { motion } from 'framer-motion'
const AboutSmvdu = () => {
  return (
    <section className='about-con-section flex flex-col md:flex-row justify-center items-center  px-16 gap-y-5'>
    {/* <div className='w-full md:w-3/6 flex justify-center items-center'> <img className='w-96 h-64 ' src="../../../public/logo.png" alt="" /> </div> */}
    <div className='w-full md:w-3/6'>
        <motion.h1 initial={{x:-400}} whileInView={{x:0}} viewport={{once:true}} className='text-3xl text-orange-500 font-bold mb-4 text-center'> About SMVDU</motion.h1> 
        <p className='text-xl text-regular '>Shri Mata Vaishno Devi University was established under an Act of J&K State Legislature in 1999 as fully residential and technical university, the first of its kind in J&K. Recognized by UGC under Section 2(f) & 12(B) of the UGC Act of 1956, the university receives funding from UGC. The university ranked 78th among Engineering Institutions and Among Ranked Top 100 Business Schools in National Institutional Ranking Framework (NIRF 2020) declared by the MHRD, Govt. of India.</p>
     </div>
</section>
  )
}

export default AboutSmvdu