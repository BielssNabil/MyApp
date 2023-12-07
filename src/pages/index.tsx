import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProfileGithub from "public/images/profilgithub.png";
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
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const now = new Date();
console.log(now.toLocaleString());

export default function Home() {
  return (
    <>
      <div className="bg-white font-serif">
        <Navbar />
        <div className="font-serif px-2">
          <Intro />
          <AboutCom />
          <ExperienceCom />
          <EducationCom />
          <SkillCom />
          <ProjectCom />
        </div>
        <Footer />
      </div>
    </>
  );
}
