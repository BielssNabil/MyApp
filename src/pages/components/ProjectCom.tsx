import React from "react";
import Image from "next/image";
import { project } from "../api/data";
import Link from "next/link";

const ProjectCom = () => {
  return (
    <div id="ProjectCom" className="min-h-full mx-10 my-16">
      <h1 className="font-bold text-center py-10 text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-400 to-sky-600">
        Project
      </h1>
      <div className="min-h-full flex flex-wrap items-center justify-center gap-5">
        {project.map((project) => {
          return (
            <div
              className="w-96 h-full border-4 flex flex-wrap gap-1 rounded-2xl hover:-translate-y-0 duration-700 hover:scale-105"
              key={project.id}
            >
              <Image
                src={project.image}
                alt="projects"
                className="h-48 rounded-t-xl"
              ></Image>
              <div className="absolute px-4 flex gap-2 text-black bg-white opacity-80 rounded-br-xl rounded-tl-xl">
                <Link
                  href={project.linkGithub}
                  className="underline underline-offset-1 hover:text-blue-700"
                >
                  Github
                </Link>
                ||
                <Link
                  href={project.link}
                  className="underline underline-offset-1 hover:text-blue-700"
                >
                  Website
                </Link>
              </div>
              <div className="flex flex-col gap-2 px-3">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <div className="py-3">
                      <span className="text-xl text-black font-bold">
                        {project.projectName}
                      </span>
                      <p className="text-xs text-gray-700">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-start">
                      <span className="bg-gray-700 text-white text-xs flex items-center justify-center w-auto p-1 rounded-xl">
                        {project.projectType1}
                      </span>
                      <span className="bg-gray-700 text-white text-xs flex items-center justify-center w-auto p-1 rounded-xl">
                        {project.projectType2}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 my-3 justify-center">
                      <Image
                        src={project.skills1}
                        alt="skills"
                        className="w-8"
                      ></Image>
                      <Image
                        src={project.skills2}
                        alt="skills"
                        className="w-8"
                      ></Image>
                      <Image
                        src={project.skills3}
                        alt="skills"
                        className="w-8"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCom;
