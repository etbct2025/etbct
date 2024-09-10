import React from "react";
import { motion } from "framer-motion";
import smvdu_image from "../../../public/university.jpg";
const AboutSmvdu = () => {
  return (
    
      <div className="flex  flex-col md:flex-row gap-10">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          className="w-full md:w-3/6 flex justify-center items-start"
        >
          <img
            className="rounded-xl md:h-[500px] object-cover"
            src={smvdu_image}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          className="w-full md:w-3/6 flex flex-col  gap-y-5"
        >
          <h1 className="text-2xl text-orange-500 font-bold  ">
        About SMVDU
      </h1>

          <p className="text-lg ">
            Shri Mata Vaishno Devi University (SMVDU), established in 1999 under
            an Act of the J&K State Legislature, is a fully residential and
            technical university recognized by the UGC under Sections 2(f) and
            12(B) of the UGC Act of 1956. Funded by the UGC, SMVDU ranked 26th
            in Architecture, 101-150 in Engineering, and 151-200 among top
            universities in NIRF 2023. The university is home to several
            dedicated Research Centres, specializing in various fields with
            significant funding from the UGC and DBT. These centres, along with
            a state-of-the-art Bioinformatics Facility, are central to SMVDU's
            research endeavors, driving advancements across diverse disciplines.
            SMVDU offers a comprehensive learning environment with modern
            facilities, including a well-stocked library, advanced computer
            labs, and cutting-edge research centres. Faculty development
            programs ensure that educators remain current with the latest
            innovations, while extracurricular activities, sports, and student
            clubs promote holistic development. This combination of academic
            excellence, dedicated faculty, and a supportive environment enables
            SMVDU students to excel and thrive in their chosen fields.
          </p>
          {/* <p className="text-lg ">
           Shri Mata Vaishno
          Devi University (SMVDU), a leading academic institution, is home to a
          number of dedicated Research Centres, all focused on fostering a
          culture of groundbreaking research. These Centres, with significant
          funding from the University Grants Commission (UGC) and the Department
          of Biotechnology (DBT), have become the foundation of the University’s
          extensive research activities. Five key Research Centres, each
          specializing in unique areas of investigation, along with a
          state-of-the-art Bioinformatics Facility, serve as the bedrock of the
          University’s scientific pursuits. SMVDU thus remains at the forefront
          of academic research, contributing significantly to advancements in
          various fields of knowledge. 
        </p> */}
          {/* <p className="text-lg ">
          In addition to its excellent academic
          infrastructure, SMVDU places a strong emphasis on creating a conducive
          learning environment for its students. The campus is equipped with
          state-of-the-art facilities such as a well-stocked library, modern
          computer labs, and advanced research centres, providing students with
          access to a vast repository of knowledge and cutting-edge technology.
          The institution also prioritizes faculty development programs,
          ensuring that educators stay abreast of the latest advancements in
          their respective fields. With a focus on holistic education, SMVDU
          promotes extracurricular activities, sports facilities, and student
          clubs, fostering a well-rounded development and nurturing the talents
          and interests of its students. The combination of exceptional academic
          infrastructure, dedicated faculty, and a supportive learning
          environment at SMVDU creates a platform for students to excel
          academically and thrive in their chosen disciplines.
        </p> */}
        </motion.div>
      </div>
   
  );
};

export default AboutSmvdu;
