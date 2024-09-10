import React from 'react'
import smvduLogo from "../../../public/logo.png"
import { motion } from 'framer-motion'
const WelcomeSection = () => {
  return (
     <>
      <section className="welcome-section flex flex-col gap-y-10 py-16 px-4 sm:px-10">
          <div className='text-center'>
              <motion.h1 initial={{y:100}} whileInView={{y:0}} viewport={{once:true}} className='text-3xl '>Welcome To <span class="before:block before:absolute before:-inset-1 before:skew-y-6 before:bg-orange-500 relative inline-block">
    <span class="relative text-white"> ETBCT </span>
  </span> 2024</motion.h1>
          </div>
          <div className='flex flex-col md:flex-row gap-y-5 md:gap-x-5'>
             <motion.div initial={{x:-200}} whileInView={{x:0}} className='w-full md:w-3/6 flex justify-center items-center'>
              <img className='' src={smvduLogo} alt="" />
             </motion.div>
             <motion.div initial={{x:200}} whileInView={{x:0}} className='w-full md:w-3/6 flex flex-col gap-y-2  justify-center'>
               <h1 className='text-3xl'>Organised By <span className='text-orange-500'>School Of Biotechnology , SMVDU</span> </h1>
               <p className='text-lg font-medium'>
               SoBT, SMVDU, welcomes all interested delegates on the event of 3rd International Conference on Emerging Trends in Bioscience and Chemical Technology Cum Workshop on Skills in Biosciences 2025. This conference serves as a vital platform for researchers, academics, industry experts, and students from around the globe to converge, share insights, and collaborate on the latest advancements and emerging trends in these dynamic fields. we will delve into a diverse range of topics that reflect the interdisciplinary nature of bioscience and chemical technology, from cutting-edge research in molecular biology and biotechnology to innovative applications in chemical engineering and materials science. The conference also includes a comprehensive workshop designed to enhance practical skills in biosciences, ensuring that participants not only gain theoretical knowledge but also hands-on experience that is critical in today’s scientific landscape.
               </p>
             </motion.div>
          </div>
      </section>
     </>
  )
}

export default WelcomeSection