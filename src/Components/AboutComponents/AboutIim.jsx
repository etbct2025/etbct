import React from 'react'

const AboutIim = () => {
  return (
    <section className='about-con-section flex flex-col md:flex-row justify-center items-center  px-16 gap-y-5'>
    <div className='w-full md:w-3/6 flex justify-center items-center'> <img className='w-64 h-64 ' src="../../../public/iiim.png" alt="" /> </div>
    <div className='w-full md:w-3/6'>
        <h1 className='text-3xl text-orange-500 font-bold mb-2'> About CSIR-IIIM Jammu</h1> 
        <p className='text-xl text-regular '>The Laboratory was established in 1941 as a research and production centre, known as Drug Research Laboratory of J&K State and was later taken over by Council of Scientific & Industrial Research (CSIR) of Govt. of India in December 1957 as Regional Research Laboratory, Jammu. In view of its core strength in natural products based drug discovery, the mandate of Institute was redefined in 2007 and its name changed to Indian Institute of Integrative Medicine (IIIM). The current mandate of IIIM is to discover new drugs and therapeutic approaches from Natural Products, both of plant and microbial origin, enabled by biotechnology, to develop technologies, drugs and products of high value for the national and international markets.</p>
     </div>
</section>
  )
}

export default AboutIim