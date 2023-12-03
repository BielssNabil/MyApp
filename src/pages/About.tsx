import React from "react";
import AboutCom from "./components/AboutCom";
import Navbar from "./components/Navbar";
import EducationCom from "./components/EducationCom";
import ExperienceCom from "./components/ExperienceCom";
import Footer from "./components/Footer";

const about = () => {
  return (
    <div className="bg-black font-serif">
      <Navbar />
      <div>
        <AboutCom />
        <EducationCom />
        <ExperienceCom />
      </div>
      <Footer />
    </div>
  );
};

export default about;
