import { motion, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutCom from "./components/AboutCom";
import ProjectCom from "./components/ProjectCom";
import ContactCom from "./components/ContactCom";
import ExperienceCom from "./components/ExperienceCom";
import SkillCom from "./components/SkillCom";
import EducationCom from "./components/EducationCom";
import Intro from "./components/Intro";

const inter = Inter({ subsets: ["latin"] });
const now = new Date();
console.log(now.toLocaleString());

export default function Home() {
  return (
    <>
      <div className="bg-black font-serif px-2">
        <Navbar />
        <div className="bg-black font-serif px-2">
          <Intro />
          <AboutCom />
          <ExperienceCom />
          <EducationCom />
          <SkillCom />
          <ProjectCom />
          <ContactCom />
        </div>
        <Footer />
      </div>
    </>
  );
}
