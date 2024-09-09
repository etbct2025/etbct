import React from "react";
import indu_profile from "../../../public/indubhusan.jpg";

const ConferenceConvener = () => {
  return (
    <section className="chief-patron  px-8 md:px-16">
    <h1 className='text-3xl bg-sky-800 pl-5 text-white font-extrabold  mb-3 py-2'>Conference Convener</h1>
  
          <div className='flex flex-col md:flex-row  gap-y-5 md:gap-x-5  gap-x-5  '>
             <div className='   overflow-hidden flex justify-center md:justify-start items-center w-full md:w-2/6  py-10 '>
                <img className=' w-96 h-[450px] rounded-xl object-cover object-center ' src={indu_profile} alt="cg_profile" />
             </div>
             <div className='w-full md:w-4/6  flex flex-col gap-y-3 justify-center'>
                <h1 className='text-2xl text-orange-500 font-bold' >Dr. Indu Bhushan</h1>
                <h3 className='text-xl font-regular'> Assistant Professor , School Of Biotechnology</h3>
                <p className='text-lg'> Dr. Indu Bhushan holds a Ph.D. in Biochemistry from Kurukshetra University and the Indian Institute of Integrative Medicine, Jammu. With research interests in fermentation, biotransformation, and enzyme purification/immobilization, Dr. Indu Bhushan has been recognized with several awards, including the UGC-Raman Fellowship for Postdoctoral Research in the USA (2015-16) and the Young Scientist Award at the National Conference on Energy, Environment, and Biotechnology Research (2013). Additionally, they received the Excellent Paper Award at the International Conference on Engineering and Technology (2016) in New York, USA.</p>
             </div>
          </div>
</section>
   
  );
};

export default ConferenceConvener;
