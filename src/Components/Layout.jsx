import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import smvduLogo from "../../public/logo.png";

const Layout = () => {
  return (
    <div className="overflow-x-hidden">
       <div className="conference-details py-5 border ">
        <div className=" flex justify-center items-center ">
          <div>
            <img className=" md:w-32 md:h-32 " src={smvduLogo} alt="smvdu_logo" />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-bold text-sky-800 text-center sm:w-[400] md:w-[600px] lg:w-[900px]">
            3rd International Conference on Emerging Trends in Biosciences and Chemical Technology Cum Workshop on Skills in Biosciences
            </h1>
          </div>
          
        </div>
        <div>
          <p className="text-sm md:text-xl font-regular text-center ">
             Shri Mata Vaishno Devi University (SMVDU),
            Jammu & Kashmir
          </p>
        </div>
      </div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
