import React, { forwardRef } from "react";
import { TiArrowRightThick } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";

const Hero = ({ text, handleClick }, ref) => {
  return (
    <main
      className="flex flex-col-reverse items-center justify-center gap-8 h-auto px-12 pb-12 pt-32 bg-gradient-to-r from-slate-300 to-white 
      lg:grid lg:grid-cols-2 lg:px-16 lg:pt-40 lg:pb-24"
      ref={ref}
    >
      <section className="flex items-center flex-col justify-center text-center">
        <div className="text-2xl lg:text-4xl">
          HI,<span className="text-purple-800"> I&#39;M NAFEED </span>.
        </div>
        <div className="text-2xl mb-4 lg:text-4xl">
          <span className="text-purple-800"> A </span>FRONTEND DEVELOPER
        </div>
        <div className="flex gap-2 text-lg lg:text-xl">
          <span>DESIGN</span>
          <span className="text-purple-800">
            <TiArrowRightThick className="text-2xl" />
          </span>
          <span>BUILD</span>
          <span className="text-purple-800">
            <TiArrowRightThick className="text-2xl" />
          </span>
          <span>EXPERIENCE</span>
        </div>
        <div className="p-4">
          I&#39;m a Frontend Developer with hands on experience using various
          frontend <span className="text-purple-800"> FRAMEWORKS </span>,
          <span className="text-purple-800"> LIBRARIES </span> and
          <span className="text-purple-800"> TOOLS </span>.
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="border-black border px-2 py-1 transition rounded-lg bg-gradient-to-r from-slate-300 to-white hover:text-rose-500"
            onClick={() => handleClick("projects")}
          >
            Projects
          </button>
          <Link href="https://github.com/nafeed013?tab=repositories">
            <button className="border-black border px-2 py-1 transition rounded-lg bg-gradient-to-r from-slate-300 to-white hover:text-rose-500">
              Github
            </button>
          </Link>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="h-60 w-60 rounded-full relative lg:h-[350px] lg:w-[350px]">
          <Image
            src="/Profile.jpg"
            fill={true}
            alt="img"
            className="rounded-full transition object-cover hover:scale-110"
          />
        </div>
      </section>
    </main>
  );
};

export default forwardRef(Hero);
