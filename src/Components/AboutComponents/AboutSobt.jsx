import React from 'react'
import { motion } from 'framer-motion'
const AboutSobt = () => {
  return (
    <section className='about-sobt-section flex flex-col md:flex-row-reverse justify-center items-center px-16 gap-y-5'>
         {/* <div className='w-full md:w-3/6 flex justify-center items-center'> <img className='w-96 h-64 ' src="../../../public/logo.png" alt="" /> </div> */}
         <div className='w-full md:w-3/6'>
             <motion.h1 initial={{x:400}} whileInView={{x:0}} viewport={{once:true}} className='text-3xl text-orange-500 font-bold mb-4 text-center '> About School of Biotechnology</motion.h1> 
             <p className='text-xl text-regular '>School of Biotechnology was established with a vision to bring in quality of life through developing and imparting knowledge in the field of life-sciences and embracive technologies. Recognizing the growing impact of biotechnology education and research in the 21st century, the School of Biotechnology at SMVDU has placed due emphasis in the curriculum on interdisciplinary convergence in modern biology, engineering and technology, applied orientation, quantitative approach, practical training, awareness of the broader social, economic, environmental, ethical, legal and managerial issues in biotechnology. The Research carried out at School of Biotechnology is of international standards and has gained recognition worldwide because of quality publications in highly reputed scientific journals and participation in Research projects of International repute along with number of patents.</p>
          </div>
    </section>
  )
}

export default AboutSobt