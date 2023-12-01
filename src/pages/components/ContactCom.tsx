import React from "react";
import Image from "next/image";
import ProfileGithub from "public/images/profilgithub.png";
import ProfileIG from "public/images/profilig.jpg";
import IG from "public/images/ig.jpeg";

const ContactCom = () => {
  return (
    <div className="px-5 py-10 min-h-screen bg-black" id="ContactCom">
      <div className="grid justify-center items-start gap-4 min-h-screen">
        <h1 className="py-5 text-4xl font-bold text-white text-center">
          Contact Me On
        </h1>
        <div className="grid grid-cols-3 gap-4 mb-20">
          <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-blue-200 to-blue-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
            <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
              <Image
                src={ProfileIG}
                alt="Instagram Image"
                className="rounded-full"
              ></Image>
            </div>
            <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
              <span className="text-2xl font-semibold">Instagram</span>
              <p>satyanabil461</p>
            </div>
            <a
              className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
              href="https://www.instagram.com/satyanabil461/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
            >
              Folow
            </a>
          </div>
          <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-blue-200 to-blue-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
            <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
              <Image
                src={ProfileGithub}
                alt="github Image"
                className="rounded-full"
              ></Image>
            </div>
            <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
              <span className="text-2xl font-semibold">GitHub</span>
              <p>BielssNabil</p>
            </div>
            <a
              className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
              href="https://github.com/BielssNabil"
            >
              Folow
            </a>
          </div>
          <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-blue-200 to-blue-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
            <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
              <Image
                src={ProfileIG}
                alt="github Image"
                className="rounded-full"
              ></Image>
            </div>
            <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
              <span className="text-2xl font-semibold">WhatsApp</span>
              <p>Nabil</p>
            </div>
            <a
              className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
              href="https://wa.me/62895375473035"
            >
              Folow
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCom;
