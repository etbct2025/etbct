import React from 'react'

const AboutIitJammu = () => {
  return (
    <section className='about-sobt-section flex flex-col md:flex-row-reverse justify-center items-center  px-16 gap-y-5'>
         <div className='w-full md:w-3/6 flex justify-center items-center'> <img className='w-64 h-64 ' src="../../../public/iit.jpeg" alt="" /> </div>
         <div className='w-full md:w-3/6'>
             <h1 className='text-3xl text-orange-500 font-bold mb-2'> About IIT Jammu</h1> 
             <p className='text-xl text-regular '>IIT Jammu is recognized as an “Institute of National Importance” under the “Institutes of Technology Act” of 1961. IIT is an autonomous public higher education Institute funded by the Government of India, and functions under the governance of the IIT Council. Overlooking the majestic mountains of Trikuta while being surrounded by the pristine greens of the city’s forest, IIT Jammu has sincerely committed itself to nurturing the young minds from every nook and corner of India with a mission to put knowledge into practice.</p>
          </div>
    </section>
  )
}

export default AboutIitJammu