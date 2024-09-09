import React from 'react'
import cg_profile from "../../../public/registrar.webp"

const Registrar = () => {
  return (
    <section className="chief-patron px-8 md:px-16">
    <h1 className='text-3xl bg-sky-800 pl-5 text-white font-extrabold  mb-3 py-2'>Chief Guest</h1>
  
          <div className='flex flex-col md:flex-row  gap-y-5 md:gap-x-5  gap-x-5 '>
             <div className='   overflow-hidden flex   justify-center md:justify-start items-center w-full md:w-2/6  py-10 '>
                <img className=' w-96 h-96 rounded-xl object-cover ' src={cg_profile} alt="cg_profile" />
             </div>
             <div className='w-full md:w-4/6  flex flex-col gap-y-3 justify-center'>
                <h1 className='text-2xl text-orange-500 font-bold' >Mr. Ajay Kumar Sharma</h1>
                <h3 className='text-xl font-regular'> Registrar ( JKAS ), SMVDU</h3>
                {/* <p className='text-lg'> Dr. Jitendra Singh the Minister of State (Independent Charge) for both the Ministry of Science and Technology and the Ministry of Earth Sciences. Additionally, he holds the position of Minister of State in the Prime Minister’s Office, overseeing the Ministry of Personnel, Public Grievances and Pensions. They also play a crucial role as Minister of State in the Department of Atomic Energy and the Department of Space. He is responsible for driving scientific innovation, managing public administration, and overseeing key areas of national importance, including atomic energy and space exploration.</p> */}
             </div>
          </div>
</section>
  )
}

export default Registrar