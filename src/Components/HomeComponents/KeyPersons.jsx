import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import vc_profile from "../../../public/keyPersons/VC.jpg"
import cg_profile from "../../../public/keyPersons/cg.jpg"
import convener_profile from "../../../public/keyPersons/indubhusan.jpg"
import registrar from "../../../public/keyPersons/registrar.webp"
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const KeyPersons = () => {
  return (
    <div className="key-person-section py-16">
      <div className="text-4xl font-bold text-center mb-10 text-orange-500 ">
        <h1> Key Persons </h1>
      </div>

      <div className="px-16 flex justify-center items-center gap-10 flex-wrap">
      <motion.div whileHover={{scale:1.1}} className="border rounded-xl">
          <div ><img className="rounded-t-xl w-64 h-[300px]sm:w-full sm:h-64" src={cg_profile} alt="" /></div>
          <div className="py-2">
             <h1 className="text-xl text-yellow-500 text-center">Dr. Jitendra Singh</h1>
             <p className="text-lg text-center">Union Minister, PMO, GoI</p>
             <p className="text-lg text-center">Chief Guest</p>
          </div>
        </motion.div>
      <motion.div whileHover={{scale:1.1}} className="border rounded-xl">
          <div ><img className="rounded-t-xl w-64 h-[300px]sm:w-96 sm:h-64" src={vc_profile} alt="" /></div>
          <div className="py-2">
             <h1 className="text-xl text-yellow-500 text-center">Prof. (Dr.) Pragati Kumar</h1>
             <p className="text-lg text-center">Vice Chancellor, SMVDU</p>
             <p className="text-lg text-center">Chief Patron</p>
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl">
          <div ><img className="rounded-t-xl w-64 h-[300px]sm:w-96 sm:h-64" src={registrar} alt="" /></div>
          <div className="py-2">
             <h1 className="text-xl text-yellow-500 text-center">Sh. Ajay Kumar Sharma (JKAS)</h1>
             <p className="text-lg text-center">Registrar, SMVDU</p>
             <p className="text-lg text-center">Patron</p>
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl">
          <div ><img className="rounded-t-xl w-64 h-[300px]sm:w-96 sm:h-64" src={convener_profile} alt="" /></div>
          <div className="py-2">
             <h1 className="text-xl text-yellow-500 text-center">Dr. Indu Bhushan</h1>
             <p className="text-lg text-center">Assitant Professor, SoBT, SMVDU</p>
             <p className="text-lg text-center">Conference Convener</p>
          </div>
        </motion.div>
      
        

      </div>
    </div>
  );
};

export default KeyPersons;
