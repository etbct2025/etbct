import React from 'react'
import cg_profile from "../../../public/keyPersons/cg.jpg"
import rakesh from "../../../public/members/yadav.jpeg"
import raju from "../../../public/members/raju.jpeg"
import { motion } from 'framer-motion'
const WorkshopMembers = () => {
  return (
    <section className="chief-patron  px-8 md:px-16">
      <h1 className="text-3xl bg-sky-800 pl-5 text-white font-extrabold  mb-3 py-2">
        Workshop Committee
      </h1>
      <div className="flex flex-wrap gap-10 sm:px-16 py-10   justify-center items-center">
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl w-[300px] h-[350px]">
          <div className=""><img className="rounded-t-xl  h-[250px] w-full sm:h-64 object-cover object-center" src={rakesh} alt="" /></div>
          <div className="pb-5">
             <h1 className="text-xl text-yellow-500 text-center">Dr. Rakesh Kumar</h1>
             <p className="text-lg text-center">Assistant Professor, SoBT</p>
             <p className="text-lg text-center">Workshop Co-Coordinator</p>
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl w-[300px] h-[350px]">
          <div className=""><img className="rounded-t-xl  h-[250px] w-full sm:h-64 object-cover object-top" src={raju} alt="" /></div>
          <div className="pb-5">
             <h1 className="text-xl text-yellow-500 text-center">Dr. Raju Shankarayan</h1>
             <p className="text-lg text-center">Assistant Professor, SoBT</p>
             <p className="text-lg text-center">Workshop Co-Coordinator</p>
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl w-[300px] h-[350px]">
          <div className=""><img className="rounded-t-xl  h-[250px] w-full sm:h-64 object-cover object-top" src={cg_profile} alt="" /></div>
          <div className="pb-5">
             <h1 className="text-xl text-yellow-500 text-center">Dr. Preeti Sharma</h1>
             <p className="text-lg text-center">Assistant Professor, SoBT</p>
             <p className="text-lg text-center">Workshop Co-Coordinator</p>
          </div>
        </motion.div>
      </div>
      {/* <div className="pl-2">
        <ul className="text-lg list-decimal list-inside">
          <li>
            Dr. Ratna Chandra, Assistant Professor, SoBT, Organizing Secretary
          </li>
          <li>
            Dr. Shafaq Rasool, Assistant Professor, SoBT,
            Co-Convener(Conference)
          </li>
          <li>
            Dr. Pravez Singh Slathia, Assistant Professor, SoBT,
            Co-Convener(Conference)
          </li>
          <li>
            Dr. Vinod singh, Assistant Professor, SoBT, Co-Organizing
            Secretary(Conference)
          </li>
          <li>
            Dr. Arvind Kumar Yadav, Assistant Professor, SoBT, Co-Organizing
            Secretary(Conference)
          </li>
          <li>
            Dr. Anil Kumar, Assistant Professor, SoBT, Co-Organizing
            Secretary(Conference)
          </li>
          <li>
            Dr. Sharada Potukuchi, Assistant Professor, SoBT, Workshop
            Co-Coordinator
          </li>
          <li>
            Dr. Rakesh Kumar, Assistant Professor, SoBT, Workshop Co-Coordinator
          </li>
          <li>
            Dr. Raju Shankarayan, Assistant Professor, SoBT, Workshop
            Co-Coordinator
          </li>
          <li>
            Dr. Preeti Sharma, Assistant Professor, SoBT, Workshop
            Co-Coordinator
          </li>
        </ul>
      </div> */}
    </section>
  )
}

export default WorkshopMembers