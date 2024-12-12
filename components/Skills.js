import React, { forwardRef } from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { TbBrandRedux } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";

const Projects = ({ text }, ref) => {
  return (
    <div
      className="px-auto pt-24 flex justify-center flex-col items-center text-center bg-gradient-to-r from-slate-300 to-white"
      ref={ref}
    >
      <div className="mb-6">
        <h1 className="text-4xl">SKILLS</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 ml-6">
        <div className="rounded-xl p-6 cursor-pointer">
          <FaHtml5 className="text-9xl mb-2 transition text-[#e34f26] hover:scale-125" />
          <span>HTML5</span>
        </div>
        <div className="rounded-xl p-6 cursor-pointer">
          <IoLogoCss3 className="text-9xl mb-2 transition text-[#264de4] hover:scale-125" />
          <span>CSS3</span>
        </div>
        <div className="rounded-xl p-6 cursor-pointer">
          <IoLogoJavascript className="text-9xl mb-2 transition text-[#ffe435] hover:scale-125" />
          <span>JavaScript</span>
        </div>
        <div className="rounded-xl p-6 cursor-pointer">
          <FaBootstrap className="text-9xl mb-2 transition text-purple-700 hover:scale-125" />
          <span>Bootstrap</span>
        </div>
        <div className="rounded-xl p-6 cursor-pointer">
          <RiTailwindCssFill className="text-9xl mb-2 transition text-sky-500 hover:scale-125" />
          <span>Tailwind CSS</span>
        </div>
        <div className="rounded-xl p-6 cursor-pointer">
          <FaGitAlt className="text-9xl mb-2 transition text-[#f34f29] hover:scale-125" />
          <span>Git</span>
        </div>
        <div className="rounded-xl p-6 cursor-pointer">
          <FaGithub className="text-9xl mb-2 transition  hover:scale-125" />
          <span>GitHub</span>
        </div>
        <div className="rounded-xl p-6 cursor-pointer">
          <GrReactjs className="text-9xl mb-2 transition  text-[#00d8ff] hover:scale-125" />
          <span>React JS</span>
        </div>
        <div className="rounded-xl p-6 cursor-pointer">
          <TbBrandRedux className="text-9xl mb-2 transition text-[#764abc] hover:scale-125" />
          <span>Redux</span>
        </div>
        <div className="rounded-xl p-6 cursor-pointer">
          <SiNextdotjs className="text-9xl mb-2 transition hover:scale-125" />
          <span>Next JS</span>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Projects);
