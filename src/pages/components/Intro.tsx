import React from "react";
import Image from "next/image";
import MyImg from "public/images/icon.jpg";

const Intro = () => {
  return (
    <div>
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
              <button className="overflow-hidden w-auto p-2 h-12 bg-gray-600 text-white border-2 rounded-md text-xl font-bold cursor-pointer relative group">
                <a href="#ContactCom">
                  Contact Me
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6">
                    Contact
                  </span>
                </a>
              </button>

              <button className="overflow-hidden w-35 p-2 h-12 bg-sky-500 text-white border-none rounded-md text-xl font-bold cursor-pointer relative group z-0">
                <a href="https://drive.google.com/file/d/1QpvlfpFN4y9BsAMn0acyMgfIaSYkkgLd/view?usp=drive_link">
                  Download CV
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left z-0"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-gray-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left z-0"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-gray-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left z-0"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-0">
                    Download
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <Image src={MyImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
