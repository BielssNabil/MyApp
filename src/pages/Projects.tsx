import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCom from "./components/ProjectCom";

const Projects = () => {
  return (
    <div className="font-serif">
      <Navbar />
      <div className="min-h-screen">
        <ProjectCom />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
