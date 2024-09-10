import React from "react";
import Carousel from "../Components/AboutComponents/Carousel";
import ImportantDates from "../Components/CallComponents/ImportantDates";
import photo1 from "../../public/photo1.jpg";
const CallPage = () => {
  return (
    <>
      <Carousel />
      <section className="px-8 md:px-16 call-for-abstract py-10 flex flex-col gap-y-10">
        <h1 className=" text-center text-2xl sm:text-4xl text-orange-500 font-bold">
          Call For Abstract
        </h1>

        <div className="particpates flex flex-col md:flex-row justify-center   md:gap-x-5 gap-y-5 ">
          <div className=" w-full  md:w-3/6  ">
            <img className="rounded-xl" src={photo1} alt="" />
          </div>
          <div className="w-full md:w-3/6 flex flex-col justify-start items-start gap-y-5 ">
            <p className="text-xl  ">
              Authors are requested to submit abstract (250 words) through an
              email to etbct-2025@smvdu.ac.in latest by 10th January, 2025. The
              abstract should be typed in MS word, Times New Roman, 12 point
              size and 1.5 line spacing. The recommended poster size shall be
              120 x 100 cm.
            </p>
            <h1 className="text-2xl sm:text-3xl text-orange-500">
              Who Can Participates
            </h1>

            <ul className="list-disc text-xl font-regular pl-5">
              <li>Academicians, Research Scholars and Students.</li>
              <li>Corporate and Industrial Personnel.</li>
              <li>Members of Non-profit Organizations, etc.</li>
            </ul>
          </div>
        </div>
        <ImportantDates />
        <div className="thrust-areas-section ">
          <div className=" ">
            
            <h1 className="text-orange-500 text-2xl sm:text-4xl mb-3 font-bold"> Thrust Areas </h1>
            <p className="text-xl pb-3">
              All the interdisciplinary areas of Biosciences and Chemical
              Technology including (but not limited to)
            </p>
          </div>

          <ul className="list-disc pl-5 text-xl ">
            <li>Health Sciences</li>
            <li>Enzymology and Molecular biology</li>
            <li>Synthetic Biology</li>
            <li>Material Science and Nanomaterials</li>
            <li>Natural Products and Green Chemistry</li>
            <li>Environmental Sustainability and Development</li>
            <li>Bioinformatics and Cheminformatics</li>
            <li>Omics: Genomics / Proteomics</li>
            <li>Bioprocess and Product Development</li>
            <li>Plant and Animal Science</li>
            <li>Microbial Biotechnology and vaccine development</li>
            <li>Artificial Intelligence in Biosciences</li>
            <li>Pharmacogenomics and Personalized Medicine</li>
            <li>Diagnostic Techniques and Biomedical Devices</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CallPage;
