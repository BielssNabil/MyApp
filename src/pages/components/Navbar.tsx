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
                  href="/About"
                  className="hover:underline underline-offset-8 hover:text-sky-500"
                >
                  About
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
                  href="#ExperienceCom"
                  className="hover:underline underline-offset-8 hover:text-sky-500"
                >
                  Experience
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
              <li>
                <a
                  href="#ContactCom"
                  className="hover:underline underline-offset-8 hover:text-sky-500"
                >
                  Contact
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
        <ul className="menu p-4 w-60 min-h-full text-black bg-white z-20">
          {/* Sidebar content here */}
          <div className="flex items-center justify-center my-5">
            <Image
              src={ProfileGithub}
              alt="profil"
              className="rounded-full w-44 border-2 border-black"
            ></Image>
          </div>

          <li className="pb-3 font-semibold border-b-4 border-black text-center">
            BIEL'S
          </li>
          <li className="my-2">
            <a href="#">Home</a>
          </li>
          <li className="my-2">
            <a href="#AboutCom">About</a>
          </li>
          <li className="my-2">
            <a href="#EducationCom">Education</a>
          </li>
          <li className="my-2">
            <a href="#ExperienceCom">Experience</a>
          </li>
          <li className="my-2">
            <a href="#SkillCom">Skill</a>
          </li>
          <li className="my-2">
            <a href="#ProjectCom">Project</a>
          </li>
          <li className="my-2">
            <a href="#ContactCom">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
