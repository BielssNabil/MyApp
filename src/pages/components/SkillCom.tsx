import React from "react";
import Image from "next/image";
import VsCode from "public/images/visual-studio-code .png";
import Language from "public/images/language-translator.png";
import FL from "public/images/coding-folder.png";
import Other from "public/images/coding-folder (1).png";
import { skillsFramework, skillsLanguage, skillsOther } from "../api/data";

const SkillCom = () => {
  return (
    <div
      id="SkillCom"
      className="bg-slate-300 rounded-3xl min-h-full mx-5 my-16 px-10 py-14"
    >
<<<<<<< Updated upstream
      <div className="flex gap-2 items-center">
        <Image
          src={VsCode}
          alt="vscode icon"
          className="w-20 h-22 justify-start"
        ></Image>
        <div>
          <h1 className="text-4xl font-bold">Skills</h1>
          <p>My Coding Skills</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-4">
        <div>
          <div className="flex flex-wrap gap-2 mt-10 mb-4">
            <div className="flex flex-row gap-2 items-center justify-center border border-black rounded-3xl w-48 p-1 px-5 mx-5">
              <Image src={Language} alt="language" className="w-10"></Image>
              <h1 className="text-lg">Language</h1>
            </div>
            <div className="flex flex-wrap flex-row gap-4 items-center justify-center">
              <Image
                src={Html}
                alt="Html"
                className="w-14 h-14 hover:-translate-y-0 duration-700 hover:scale-150"
              ></Image>
              <Image
                src={CSS}
                alt="css"
                className="w-14 h-14 hover:-translate-y-0 duration-700 hover:scale-150"
              ></Image>
              <Image
                src={Javascript}
                alt="javascript"
                className="w-14 h-14 hover:-translate-y-0 duration-700 hover:scale-150"
              ></Image>
              <Image
                src={Typescript}
                alt="Typescript"
                className="w-14 h-14 hover:-translate-y-0 duration-700 hover:scale-150"
              ></Image>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-10 mb-4">
            <div className="flex flex-row gap-2 items-center justify-center border border-black rounded-3xl w-48 p-1 px-5 mx-5">
              <Image src={FL} alt="FL" className="w-10"></Image>
              <div className="flex flex-wrap justify-center items-center">
                <h1 className="text-lg underline-offset-4">Framework</h1>
                <h1 className="text-lg">Library</h1>
              </div>
            </div>
            <div className="flex flex-wrap flex-row gap-4 items-center justify-center">
              <Image
                src={ReactLogo}
                alt="React Logo"
                className="w-14 h-14 hover:-translate-y-0 duration-700 hover:scale-150"
              ></Image>
              <Image
                src={Tailwind}
                alt="Tailwind"
                className="w-14 h-14 hover:-translate-y-0 duration-700 hover:scale-150"
              ></Image>
              <Image
                src={Vite}
                alt="Vite"
                className="w-14 h-14 hover:-translate-y-0 duration-700 hover:scale-150"
              ></Image>
              <Image
                src={Next}
                alt="Next"
                className="w-14 h-14 hover:-translate-y-0 duration-700 hover:scale-150"
              ></Image>
              <Image
                src={Bootstrap}
                alt="Bootstrap"
                className="w-14 h-14 hover:-translate-y-0 duration-700 hover:scale-150"
              ></Image>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-10 mb-4">
            <div className="flex flex-row gap-2 items-center justify-center border border-black rounded-3xl w-48 p-1 px-5 mx-5">
              <Image src={Other} alt="FL" className="w-10"></Image>
              <div className="flex flex-wrap justify-center items-center">
                <h1 className="text-lg">Others</h1>
              </div>
            </div>
            <div className="flex flex-wrap flex-row gap-4 items-center justify-center">
              <Image
                src={Npm}
                alt="Npm"
                className="w-14 h-14 hover:-translate-y-0 duration-700 hover:scale-150"
              ></Image>
              <Image
                src={Git}
                alt="Git"
                className="w-14 h-14 hover:-translate-y-0 duration-700 hover:scale-150"
              ></Image>
              <Image
                src={Wp}
                alt="Wordpress"
                className="w-14 h-14 hover:-translate-y-0 duration-700 hover:scale-150"
              ></Image>
            </div>
=======
      <div>
        <div className="flex gap-2 items-center">
          <Image
            src={VsCode}
            alt="vscode icon"
            className="w-20 h-22 justify-start"
          ></Image>
          <div>
            <h1 className="text-4xl font-bold">Skills</h1>
            <p>My Coding Skills</p>
>>>>>>> Stashed changes
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-10 mb-4">
          <div className="flex flex-row gap-2 items-center justify-center border border-black rounded-3xl w-48 p-1 px-5 mx-5">
            <Image src={Language} alt="language" className="w-10"></Image>
            <h1 className="text-lg">Language</h1>
          </div>
          {skillsLanguage.map((skills) => {
            return (
              <div className="flex flex-wrap flex-row gap-9 items-center justify-center">
                <Image
                  src={skills.image}
                  alt="skills"
                  className="w-14 h-14 mx-2 hover:-translate-y-0 duration-700 hover:scale-150"
                ></Image>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2 mt-10 mb-4">
          <div className="flex flex-row gap-2 items-center justify-center border border-black rounded-3xl w-48 p-1 px-5 mx-5">
            <Image src={FL} alt="FL" className="w-10"></Image>
            <div className="flex flex-wrap justify-center items-center">
              <h1 className="text-lg underline-offset-4">Framework</h1>
              <h1 className="text-lg">Library</h1>
            </div>
          </div>
          {skillsFramework.map((skills) => {
            return (
              <div className="flex flex-wrap flex-row gap-4 items-center justify-center">
                <Image
                  src={skills.image}
                  alt="skills"
                  className="w-14 h-14 mx-2 hover:-translate-y-0 duration-700 hover:scale-150"
                ></Image>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2 mt-10 mb-4">
          <div className="flex flex-row gap-2 items-center justify-center border border-black rounded-3xl w-48 p-1 px-5 mx-5">
            <Image src={Other} alt="FL" className="w-10"></Image>
            <div className="flex flex-wrap justify-center items-center">
              <h1 className="text-lg">Others</h1>
            </div>
          </div>
          {skillsOther.map((skills) => {
            return (
              <div className="flex flex-wrap flex-row gap-4 items-center justify-center">
                <Image
                  src={skills.image}
                  alt="skills"
                  className="w-14 h-14 mx-2 hover:-translate-y-0 duration-700 hover:scale-150"
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillCom;
