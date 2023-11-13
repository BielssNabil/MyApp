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

const inter = Inter({ subsets: ["latin"] });
const now = new Date();
console.log(now.toLocaleString());

export default function Home() {
  return (
    <>
      <div className="bg-black font-serif">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-4 px-5 py-10 mt-6 min-h-screen bg-black">
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
              <button className="overflow-hidden w-32 p-2 h-12 bg-gray-600 text-white border-2 rounded-md text-xl font-bold cursor-pointer relative group mr-5">
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
          <div className="flex items-center justify-start">
            <Image src={MyImg} alt="img" />
          </div>
        </div>
        <AboutCom />
        <ExperienceCom />
        <SkillCom />
        <ProjectCom />
        <ContactCom />
        <div className="group before:absolute before:bg-sky-500 before:w-3 before:h-12 before:top-24 before:-right-2 before:-z-10 before:rounded-2xl before:shadow-inner before:shadow-gray-50 relative w-60 h-60 bg-sky-500 shadow-inner shadow-gray-50 flex justify-center items-center rounded-3xl">
          <div className="w-56 h-56 bg-neutral-900 shadow-inner shadow-gray-50 flex justify-center items-center rounded-3xl">
            <div className="flex flex-col items-center justify-center rounded-2xl bg-neutral-900 shadow-inner shadow-gray-50 w-52 h-52">
              <div className="group-hover:duration-300 hover:opacity-100  opacity-0 before:absolute before:w-12 before:h-12 before:bg-orange-800 before:rounded-full before:blur-xl before:top-16 relative   flex flex-col justify-around items-center w-44 h-40 bg-neutral-900 text-gray-50">
                <span className="">bhb</span>
                <span className="z-10 flex items-center text-6xl text-amber-600 [text-shadow:_2px_2px_#fff,_1px_2px_#fff]">
                  12
                  <span className="text-xl font-bold text-gray-50 [text-shadow:none]">
                    :
                  </span>
                  58
                </span>
                <div className="text-gray-50 w-48 flex flex-row justify-evenly">
                  <span className="text-xs font-bold">89</span>
                  <div className="flex flex-row items-center">
                    <svg
                      className="w-5 h-5 fill-red-500 animate-bounce"
                      height="100"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 100 100"
                      width="100"
                      x="0"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0"
                    >
                      <path
                        className=""
                        d="M23,27.6a15.8,15.8,0,0,1,22.4,0L50,32.2l4.6-4.6A15.8,15.8,0,0,1,77,50L50,77,23,50A15.8,15.8,0,0,1,23,27.6Z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      className="w-5 h-5 fill-current"
                      height="100"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 100 100"
                      width="100"
                      x="0"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0"
                    >
                      <path
                        className="svg-fill-primary"
                        d="M80.2,40.7l-1.1-2-.2-.3.3-.3c2.2-14.7-21.3-25.6-20.7-21S57,38.1,45.4,31.8c-9.3-5.1-12.9,12.1-22.8,33.7C16.2,79.4,20.8,82.3,27,81l.3.4L29,83.3a1.4,1.4,0,0,0,1.8.5l.9-.3a1.6,1.6,0,0,0,1.1-1.9l-.5-2.5a38.2,38.2,0,0,0,4.5-2.7L38.6,78a1.8,1.8,0,0,0,2.4-.1l1.2-1.1a1.9,1.9,0,0,0,.4-1.9l-1-2.5L45.5,69l1.7,1.6a1.8,1.8,0,0,0,2.4-.1l.9-1a1.7,1.7,0,0,0,.4-1.8L50,65c5.6-5,11.9-10.9,17.3-15.8l.4.2,1.9,1.1a1.6,1.6,0,0,0,2.1-.2l.8-.8a1.6,1.6,0,0,0,.3-2.1l-1.3-2.1,3.2-3.1,2.2,1.5a1.8,1.8,0,0,0,2.2-.1l.8-.8A1.7,1.7,0,0,0,80.2,40.7Z"
                      ></path>
                    </svg>
                    <svg
                      className="w-5 h-5 fill-current"
                      height="100"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 100 100"
                      width="100"
                      x="0"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0"
                    >
                      <path
                        className="svg-fill-primary"
                        d="M59.5,20.5a3.9,3.9,0,0,0-2.5-2,4.3,4.3,0,0,0-3.3.5,11.9,11.9,0,0,0-3.2,3.5,26,26,0,0,0-2.3,4.4,76.2,76.2,0,0,0-3.3,10.8,120.4,120.4,0,0,0-2.4,14.2,11.4,11.4,0,0,1-3.8-4.2c-1.3-2.7-1.5-6.1-1.5-10.5a4,4,0,0,0-2.5-3.7,3.8,3.8,0,0,0-4.3.9,27.7,27.7,0,1,0,39.2,0,62.4,62.4,0,0,1-5.3-5.8A42.9,42.9,0,0,1,59.5,20.5ZM58.4,70.3a11.9,11.9,0,0,1-20.3-8.4s3.5,2,9.9,2c0-4,2-15.9,5-17.9a21.7,21.7,0,0,0,5.4,7.5,11.8,11.8,0,0,1,3.5,8.4A12,12,0,0,1,58.4,70.3Z"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <span className="text-gray-700 text-lg font-light">fitbit</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
