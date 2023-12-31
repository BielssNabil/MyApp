import React from "react";
import Image from "next/image";
import { experience } from "../api/data";

const ExperienceCom = () => {
  return (
    <div id="ExperienceCom" className="min-h-full my-10">
      <h1 className="font-bold text-center pt-20 text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-400 to-sky-600">
        Experience
      </h1>
      <div className="flex flex-wrap gap-8 justify-center my-10 mx-5">
        {experience.map((experience) => {
          return (
            <div
              className="flex flex-col justify-center items-center w-auto h-auto gap-5 p-5 bg-gray-900 hover:shadow-2xl hover:shadow-sky-700 transition-shadow rounded-lg md:flex-row hover:-translate-y-0 duration-700 hover:scale-105"
              key={experience.id}
            >
              <div className="flex justify-center items-center">
                <Image
                  src={experience.image}
                  alt="logo company"
                  className="w-28 h-28 rounded-lg hover:-translate-y-10 duration-700 hover:scale-125"
                ></Image>
              </div>
              <div className="max-w-sm h-auto space-y-3">
                <div className="flex justify-center items-center sm:justify-between">
                  <h2 className="text-white text-2xl font-bold tracking-widest">
                    {experience.companyName}
                  </h2>
                </div>
                <p className="text-sm text-gray-200">{experience.Position}</p>
                <div className="flex justify-around items-center my-2">
                  <p className="text-sm text-gray-200">{experience.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceCom;
