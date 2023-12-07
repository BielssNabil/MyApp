import React from "react";
import Navbar from "./components/Navbar";
import SkillCom from "./components/SkillCom";
import Footer from "./components/Footer";

const Skill = () => {
  return (
    <div className="font-serif">
      <Navbar />
      <div className="min-h-screen">
        <SkillCom />
      </div>
      <Footer />
    </div>
  );
};

export default Skill;
