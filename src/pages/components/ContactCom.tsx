import React from "react";

const ContactCom = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 flex-wrap gap-4 px-5 py-3 min-h-screen bg-black"
      id="ContactCom"
    >
      <div className="flex flex-col items-start justify-center text-white p-4">
        <h1 className="text-4xl font-bold">Contact</h1>
        <div className="grid grid-cols-3 gap-2 mt-5">
          <div className="">Name</div>
          <div className="text-slate-400 font-mono grid col-span-2">
            :Nabil Satya Pramana
          </div>
          <div className="">Date of birth</div>
          <div className="text-slate-400 font-mono grid col-span-2">
            :October 09, 2005
          </div>
          <div className="">Address</div>
          <div className="text-slate-400 font-mono grid col-span-2">
            :Jl.Kolonel Masturi No.185/197, Cipageran, North Cimahi, Cimahi,
            East Java
          </div>
          <div className="">Zip code</div>
          <div className="text-slate-400 font-mono grid col-span-2">:40511</div>
          <div className="">Email</div>
          <div className="text-slate-400 font-mono grid col-span-2">
            :nabilsatya321@gmail.com
          </div>
          <div className="">Phone</div>
          <div className="text-slate-400 font-mono grid col-span-2">
            :0895375473035
          </div>
        </div>
        <a
          href=""
          className="py-3 px-5 mt-5 bg-sky-500 hover:bg-sky-600 rounded-full"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default ContactCom;
