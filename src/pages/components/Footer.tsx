import React from "react";
import Image from "next/image";
import skills4 from "public/images/typescript.png";
import skillsFw2 from "public/images/next.png";
import skillsFw4 from "public/images/tailwind.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <div className="flex flex-wrap gap-2 my-1 justify-center items-center">
            <h1 className="font-bold">Powered by New Technology</h1>

            <Image src={skillsFw2} alt="skills" className="w-8"></Image>
            <Image src={skillsFw4} alt="skills" className="w-8"></Image>
            <p className="font-semibold">
              Made by Nabil Satya. All right reserved.
            </p>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
