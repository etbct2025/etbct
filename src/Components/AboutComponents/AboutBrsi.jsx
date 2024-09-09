import React from 'react'

const AboutBrsi = () => {
  return (
    <section className='about-sobt-section flex flex-col md:flex-row-reverse justify-center items-center  px-16 gap-y-5'>
         <div className='w-full md:w-3/6 flex justify-center items-center'> <img className='w-64 h-64 ' src="../../../public/brsi.png" alt="" /> </div>
         <div className='w-full md:w-3/6'>
             <h1 className='text-3xl text-orange-500 font-bold mb-2'> About BRSI</h1> 
             <p className='text-xl text-regular '>The aim of the Biotech Research Society of India [BRSI] is to promote the R&D in biotechnology, bring interaction between the academic institutes and biotech industries, interact with the industries and help them in resolving their problems as well make them aware with the new developments in the biotech sector, provide and arrange training in biotechnology, dissemination of biotech knowledge through the organization of lectures, seminars and symposia on scientific programmes and societal missions.</p>
          </div>
    </section>
  )
}

export default AboutBrsi