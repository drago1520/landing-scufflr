import React from "react";
import Image from "next/image";

type MobileMockupProps = {
  imageSrc: string;
  alt: string;
};

const MobileMockUp = ({ imageSrc, alt }: MobileMockupProps) => {
  return (
    <div className="mockup-phone w-[300px] h-[600px] relative overflow-hidden hover:scale-105 transition duration-300 hover:-rotate-6">
      <div className="camera"></div>
      <div className="display relative w-full h-full">
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0"
        />
      </div>
    </div>
  );
};

export default MobileMockUp;
