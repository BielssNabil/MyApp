import React from "react";
import Image from "next/image";
import stm from "public/images/logostm.png";

const EducationCom = () => {
  return (
    <div>
      <div id="EducationCom" className="text-white min-h-full">
        <h1 className="text-4xl font-bold text-center pt-16">Education</h1>
        <div className="flex flex-wrap gap-8 justify-center my-10 mx-5">
          <div className="flex flex-col justify-center items-center w-auto h-auto gap-5 p-5 bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow rounded-lg md:flex-row hover:-translate-y-0 duration-700 hover:scale-110">
            <div className="flex justify-center items-center">
              <Image
                src={stm}
                alt="logo stm"
                className="w-28 h-28 rounded-lg hover:-translate-y-10 duration-700 hover:scale-125"
              ></Image>
              <svg
                className="logo-svg"
                viewBox="0 0 29.667 31.69"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <path
                  transform="translate(0 0)"
                  d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"
                  data-name="Path 6"
                  id="Path_6"
                ></path>
                <path
                  transform="translate(-45.91 0)"
                  d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z"
                  data-name="Path 7"
                  id="Path_7"
                ></path>
                <path
                  transform="translate(0 -51.963)"
                  d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z"
                  data-name="Path 8"
                  id="Path_8"
                ></path>
              </svg>
            </div>
            <div className="max-w-sm h-auto space-y-3">
              <div className="flex justify-center items-center sm:justify-between gap-5">
                <h2 className="text-white text-2xl font-bold tracking-widest">
                  SMK NEGERI 1 CIMAHI
                </h2>
                <p className="flex justify-center">"47</p>
              </div>
              <p className="text-sm text-gray-200">
                STUDENT - SOFTWARE ENGINEERING
              </p>
              <div className="flex justify-around items-center my-2">
                <p className="text-sm text-gray-200">2020 - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCom;
