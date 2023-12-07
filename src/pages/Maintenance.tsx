import React from "react";
import Image from "next/image";
import MaintenanceImage from "public/images/web-maintenance.png";

const Maintenance = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-1 min-h-screen mx-5">
      <div>
        <Image src={MaintenanceImage} alt="Maintenance"></Image>
        <h1 className="text-4xl font-serif text-center">
          Website Under Maintenance
        </h1>
      </div>
    </div>
  );
};

export default Maintenance;
