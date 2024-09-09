import React from 'react'
import vc_profile from "../../../public/VC.jpg"
const ChiefPatron = () => {
  return (
     <section className="chief-patron  px-16">
          <h1 className='text-3xl bg-sky-800 text-white font-extrabold  mb-3 pl-5 py-2'>Chief Patron</h1>
          <div className='flex  gap-x-5 '>
             <div className='   overflow-hidden flex justify-start items-center w-2/6  py-10 '>
                <img className=' w-96 h-96 rounded-xl' src={vc_profile} alt="vc_profile" />
             </div>
             <div className='w-4/6  flex flex-col gap-y-3 justify-center'>
                <h1 className='text-2xl text-orange-500 font-bold' >Prof. (Dr.) Pragati Kumar</h1>
                <h3 className='text-xl font-regular'>  Honorable Vice Chancellor , SMVDU</h3>
                <p className='text-lg'> Prof. Pragati Kumar today took over the charge of Vice-Chancellor of Shri Mata Vaishno Devi University (SMVDU), Katra. Dr. Pragati Kumar has served as a Professor in the Department of Electrical Engineering at Delhi Technological University, and was appointed as Vice Chancellor of the Shri Mata Vaishno Devi University by the Lieutenant Governor of UT of J&K, the Hon&apos;ble Chancellor of the University.  His areas of interests are Active Networks, Analog Integrated Circuit, Non-linear Circuit Design, Analog Instrumentation etc. He has also worked as Head, Department of Electrical Engineering and Dean, Industrial Research Development at Delhi Technical University.  He has to his credit more than 55 publications in various International/National Journals, books and conferences of repute. His vast experience in teaching and research is expected to help Shri Mata Vaishno Devi University in achieving success in all fields.</p>
             </div>
          </div>
     </section>
  )
}

export default ChiefPatron