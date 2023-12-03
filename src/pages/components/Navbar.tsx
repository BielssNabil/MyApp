import React from "react";
import Image from "next/image";
import ProfileGithub from "public/images/profilgithub.png";

const Navbar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar uppercase font-semibold text-white bg-black fixed z-20 top-0">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 font-semibold text-lg text-sky-500 z-20">
            <a href="/">BIEL'S</a>
          </div>
          <div className="flex-none hidden lg:block z-20">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a
                  href="/"
                  className="hover:underline underline-offset-8 hover:text-sky-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#AboutCom"
                  className="hover:underline underline-offset-8 hover:text-sky-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#ExperienceCom"
                  className="hover:underline underline-offset-8 hover:text-sky-500"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#EducationCom"
                  className="hover:underline underline-offset-8 hover:text-sky-500"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#SkillCom"
                  className="hover:underline underline-offset-8 hover:text-sky-500"
                >
                  Skill
                </a>
              </li>
              <li>
                <a
                  href="#ProjectCom"
                  className="hover:underline underline-offset-8 hover:text-sky-500"
                >
                  Project
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-2 w-60 min-h-full text-black bg-white z-20">
          {/* Sidebar content here */}
          <div className="flex items-center justify-center my-5">
            <Image
              src={ProfileGithub}
              alt="profil"
              className="rounded-full w-40 border-2 border-black"
            ></Image>
          </div>

          <li className="pb-3 font-semibold border-b-4 border-black text-center">
            BIEL'S
          </li>
          <li className="my-2">
            <a href="/">Home</a>
          </li>
          <li className="my-2">
            <a href="/About">About</a>
          </li>
          <li className="my-2">
            <a href="/Skill">Skill</a>
          </li>
          <li className="my-2">
            <a href="/Projects">Projects</a>
          </li>
          <div className="" id="contact">
            <div className="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
              <div className="text-gray-500 group-hover:scale-105 transition-all">
                <svg
                  className="w-16 h-16"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <div className="group-hover:pb-10 transition-all duration-500 delay-200">
                <h1 className="font-semibold text-gray-700">
                  Nabil Satya Pramana
                </h1>
                <p className="text-gray-500 text-sm">@FrontEnd Web Developer</p>
              </div>
              <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
                <div className="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
                  <a className="hover:scale-110 transition-all duration-500 delay-200">
                    <svg
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                    </svg>
                  </a>
                  <a className="hover:scale-110 transition-all duration-500 delay-200">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <path d="M22 6l-10 7L2 6"></path>
                    </svg>
                  </a>
                  <a className="hover:scale-110 transition-all duration-500 delay-200">
                    <svg
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 960 1000"
                    >
                      <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
