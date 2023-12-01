import Image from "next/image";
import React from "react";
import MyImg from "public/images/img2.jpg";

const AboutCom = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-4 px-5 py-3 min-h-screen bg-black "
      id="AboutCom"
    >
      <div className="flex items-center justify-center p-10 ">
        <Image
          src={MyImg}
          alt="img"
          className="hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow rounded-3xl"
        />
      </div>
      <div className="flex flex-col items-start justify-center text-white my-10">
        <h1 className="text-4xl font-bold">About Me</h1>
        <h5 className="my-5 text-slate-400 font-mono">
          I am Nabil, a graduate of SMKN 1 Cimahi majoring in Software
          Engineering in 2023. I have an interest in working in the field of
          information and communication technology, especially as a Front End
          Web Developer. Armed with an educational background and abilities in
          this field, I am ready to contribute my time and abilities in this
          field.
        </h5>
      </div>
    </div>
  );
};

export default AboutCom;
