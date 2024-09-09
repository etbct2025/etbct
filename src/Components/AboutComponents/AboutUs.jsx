import React from "react";
import AboutCon from "./AboutCon";
import AboutSobt from "./AboutSobt";
import AboutSmvdu from "./AboutSmvdu";
import AboutIitJammu from "./AboutIitJammu";
import AboutIim from "./AboutIim";
import AboutBrsi from "./AboutBrsi";

const AboutUs = () => {
  return (
    <div className="about-us-section flex flex-col gap-y-5 py-10">
      {/* <div className="text-4xl  font-bold text-center">
        <h1 className="underline leading-snug">About Us</h1>
      </div> */}
      <div className="flex flex-col justify-center items-center gap-y-10">
        <AboutCon/>
        <AboutSobt/>
        <AboutSmvdu/>
        {/* <AboutIitJammu/>
        <AboutIim/>
        <AboutBrsi/> */}
      </div>
    </div>
  );
};


export default AboutUs;
