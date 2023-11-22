import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutCom from "./components/AboutCom";
import ProjectCom from "./components/ProjectCom";
import MyImg from "public/images/icon.jpg";
import ResumeCom from "./components/ExperienceCom";
import ContactCom from "./components/ContactCom";
import ExperienceCom from "./components/ExperienceCom";
import SkillCom from "./components/SkillCom";
import EducationCom from "./components/EducationCom";

const inter = Inter({ subsets: ["latin"] });
const now = new Date();
console.log(now.toLocaleString());

export default function Home() {
  return (
    <>
      <div className="bg-black font-serif px-2">
        <Navbar />
        <div
          className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-4 px-5 py-10 mt-6 min-h-screen bg-black"
          id="intro"
        >
          <div className="flex items-center justify-center ">
            <div>
              <h3 className="text-lg text-white">Hello !!</h3>
              <div className="flex mt-1">
                <h1 className="flex-none text-5xl mr-4 font-semibold text-white">
                  I'm
                </h1>
                <h1 className="grow text-5xl mr-4 font-semibold text-sky-500">
                  Nabil
                </h1>
              </div>
              <h1 className="text-5xl mb-3 font-semibold text-sky-500">
                Satya Pramana
              </h1>

              <h3 className="text-xl mb-6 text-white">
                Interested FrontEnd Web Developer
              </h3>
              <div className="flex gap-4">
                <button className="overflow-hidden w-32 p-2 h-12 bg-gray-600 text-white border-2 rounded-md text-xl font-bold cursor-pointer relative group">
                  Hire Me
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6">
                    Hire Me
                  </span>
                </button>

                <button className="overflow-hidden w-35 p-2 h-12 bg-sky-500 text-white border-none rounded-md text-xl font-bold cursor-pointer relative group z-0">
                  Download CV
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left z-0"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-gray-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left z-0"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-gray-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left z-0"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-0">
                    Download
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start">
            <Image src={MyImg} alt="img" />
          </div>
        </div>
        <AboutCom />
        <EducationCom />
        <ExperienceCom />
        <SkillCom />
        <ProjectCom />
        <ContactCom />
      </div>
      <Footer />
    </>
  );
}
