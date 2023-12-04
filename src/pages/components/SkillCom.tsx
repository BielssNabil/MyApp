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
      className="min-h-full mx-5 my-16 px-5 py-14 flex flex-wrap items-center justify-center"
    >
      <div className="grid border p-10 rounded-3xl bg-slate-300 text-black">
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
        <div className="flex flex-wrap gap-2 mt-10 mb-4">
          <div className="flex flex-row gap-2 items-center justify-center border border-black rounded-3xl w-48 p-1 px-5 mx-5">
            <Image src={Language} alt="language" className="w-10"></Image>
            <h1 className="text-lg">Language</h1>
          </div>
          {skillsLanguage.map((skills) => {
            return (
              <div
                className="flex flex-wrap flex-row gap-9 items-center justify-center"
                key={skills.id}
              >
                <Image
                  src={skills.image}
                  alt="skills"
                  className="w-14 h-14 m-2 hover:-translate-y-0 duration-700 hover:scale-150"
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
              <div
                className="flex flex-wrap flex-row gap-4 items-center justify-center"
                key={skills.id}
              >
                <Image
                  src={skills.image}
                  alt="skills"
                  className="w-14 h-14 m-2 hover:-translate-y-0 duration-700 hover:scale-150"
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
              <div
                className="flex flex-wrap flex-row gap-4 items-center justify-center"
                key={skills.id}
              >
                <Image
                  src={skills.image}
                  alt="skills"
                  className="flex justify-center items-center w-14 h-14 m-2 hover:-translate-y-0 duration-700 hover:scale-150"
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
