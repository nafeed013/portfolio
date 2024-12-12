import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[160px] bg-gradient-to-r from-slate-300 to-white flex justify-center items-center flex-col border-y-[1px] border-gray-300">
      <div>
        <div className="w-[40px] h-[40px] relative mb-4">
          <Image
            src="/logo.jpg"
            fill={true}
            alt="footer Img"
            className="rounded-full ml-16 bg-transparent"
          ></Image>
        </div>
        <h3>Mohammad Nafeed</h3>
      </div>
    </div>
  );
};

export default Footer;
