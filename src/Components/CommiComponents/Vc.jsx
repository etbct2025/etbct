import React from 'react'

const Vc = () => {
  return (
    <section className="chief-guest px-6 md:px-16 flex flex-col md:flex-row-reverse py-5">
      <div className="  w-full md:w-3/6  flex justify-center items-center   ">
        <div className="parent relative h-48 w-48 sm:h-64 sm:w-64 overflow-hidden rounded-[50%]">
          <img
            className="child w-full h-full object-cover object-center rounded-[50%] transition-all duration-300 ease-in-out"
            src="../../.././VC.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="w-full md:w-3/6  flex flex-col justify-center gap-y-2 sm:px-10">
        <h1 className="text-2xl font-bold">
Prof. (Dr.) Pragati Kumar</h1>
        <p className="text-xl">
        Prof. Pragati Kumar today took over the charge of Vice-Chancellor of Shri Mata Vaishno Devi University (SMVDU), Katra. Dr. Pragati Kumar has served as a Professor in the Department of Electrical Engineering at Delhi Technological University, and was appointed as Vice Chancellor of the Shri Mata Vaishno Devi University by the Lieutenant Governor of UT of J&K, the Hon’ble Chancellor of the University.  His areas of interests are Active Networks, Analog Integrated Circuit, Non-linear Circuit Design, Analog Instrumentation etc. He has also worked as Head, Department of Electrical Engineering and Dean, Industrial Research Development at Delhi Technical University.  He has to his credit more than 55 publications in various International/National Journals, books and conferences of repute. His vast experience in teaching and research is expected to help Shri Mata Vaishno Devi University in achieving success in all fields. 
         
        </p>
      </div>
    </section>
  )
}

export default Vc