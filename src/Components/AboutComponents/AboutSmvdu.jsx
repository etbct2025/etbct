import React from "react";
import { motion } from "framer-motion";
import smvdu_image from "../../../public/university.jpg";
const AboutSmvdu = () => {
  return (
    <div className="flex  flex-col md:flex-row gap-10">
      <motion.div initial={{x:-200}} whileInView={{x:0}} className="w-full md:w-3/6 flex justify-center items-start">
        <img className="rounded-xl md:h-[500px] object-cover" src={smvdu_image} alt="" />
      </motion.div>
      <motion.div initial={{x:200}} whileInView={{x:0}} className="w-full md:w-3/6 flex flex-col  gap-y-5">
        <h1 className="text-2xl text-orange-500 font-bold ">About SMVDU</h1>
        <p className="text-xl font-regular ">
          Shri Mata Vaishno Devi University was established under an Act of J&K
          State Legislature in 1999 as fully residential and technical
          university, the first of its kind in J&K. Recognized by UGC under
          Section 2(f) & 12(B) of the UGC Act of 1956, the university receives
          funding from UGC. The university ranked 78th among Engineering
          Institutions and Among Ranked Top 100 Business Schools in National
          Institutional Ranking Framework (NIRF 2020) declared by the MHRD,
          Govt. of India.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutSmvdu;
