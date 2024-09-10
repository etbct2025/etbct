import React from "react";
import { motion } from "framer-motion";

import smvdu_image from "../../../public/conference.jpg";
const AboutCon = () => {
  return (
    <div className="flex  flex-col md:flex-row gap-10 ">
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        className="w-full md:w-3/6 flex justify-center items-center"
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
        <h1 className="text-2xl text-orange-500 font-bold ">
          About Conference
        </h1>
        <p className="text-lg ">
        The School of Biotechnology, Shri Mata Vaishno Devi University, Katra, is thrilled to welcome delegates, scientists, faculty, research scholars, and students to the 3rd International Conference on Emerging Trends in Biosciences and Chemical Technology, alongside a Workshop on Skills in Biosciences 2025. This global event serves as a critical platform for researchers, academics, industry experts, and students to share insights and collaborate on the latest advancements in these dynamic fields.

The conference will explore a broad range of topics, reflecting the interdisciplinary nature of biosciences and chemical technology. Discussions will cover cutting-edge research in molecular biology, biotechnology, chemical engineering, and materials science. The accompanying workshop will focus on practical skills in biosciences, providing participants with hands-on experience essential in today’s scientific landscape.

We are honored to host distinguished speakers and experts who will offer valuable perspectives. Attendees are encouraged to engage in meaningful discussions, exchange ideas, and build networks to foster future collaborations. Together, we aim to advance the frontiers of biosciences and chemical technology and contribute to innovations shaping the future.
        </p>
        {/* <p className="text-lg">
          {" "}
          Over the course of this event, we will delve into a diverse range of
          topics that reflect the interdisciplinary nature of biosciences and
          chemical technology, from cutting-edge research in molecular biology
          and biotechnology to innovative applications in chemical engineering
          and materials science. The conference also includes a comprehensive
          workshop designed to enhance practical skills in biosciences, ensuring
          that participants not only gain theoretical knowledge but also
          hands-on experience that is critical in today’s scientific landscape.
        </p>
        <p className="text-lg">
          We are honored to host distinguished speakers and experts who will
          share their invaluable perspectives, and we encourage all attendees to
          engage in meaningful discussions, exchange ideas, and build networks
          that will foster future collaborations. Together, let us explore the
          frontiers of biosciences and chemical technology, and contribute to the
          ongoing advancements that are shaping our world.
        </p> */}
      </motion.div>
    </div>
  );
};

export default AboutCon;
