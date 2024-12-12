"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = ({ handleClick }) => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="h-16 w-full flex justify-between fixed z-10 items-center px-10 bg-gradient-to-r from-slate-300 to-white">
      <div>
        <button
          className="flex transition rounded-md py-2 hover:text-rose-500"
          onClick={() => handleClick("hero")}
        >
          <div className="w-[40px] h-[40px] relative">
            <Image
              src="/logo.jpg"
              fill={true}
              alt="logo"
              className="rounded-full"
            ></Image>
          </div>
        </button>
      </div>

      <ul className="hidden xl:flex justify-center gap-14 rounded-lg">
        <li
          onClick={() => handleClick("hero")}
          className="hidden xl:block hover:text-rose-500 cursor-pointer transition"
        >
          About
        </li>
        <li
          onClick={() => handleClick("projects")}
          className="hidden xl:block hover:text-rose-500 cursor-pointer transition"
        >
          Projects
        </li>
        <li
          onClick={() => handleClick("skills")}
          className="hidden xl:block hover:text-rose-500 cursor-pointer transition"
        >
          Skills
        </li>
        <li
          onClick={() => handleClick("resume")}
          className="hidden xl:block hover:text-rose-500 cursor-pointer transition"
        >
          Resume
        </li>
        <li
          onClick={() => handleClick("contact")}
          className="hidden xl:block hover:text-rose-500 cursor-pointer transition"
        >
          Contact
        </li>
      </ul>

      <div className="block xl:hidden hover:cursor-pointer text-xl">
        <RiMenu3Fill onClick={() => setMenu(!menu)} />
      </div>

      <div
        className={`absolute xl:hidden top-16 left-0 w-full bg-gradient-to-r from-slate-300 to-white flex flex-col items-center gap-6 
        transform transition-transform ${menu ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <li
          className="list-none w-full text-center p-4 hover:text-rose-500 transition-all cursor-pointer"
          onClick={() => handleClick("hero")}
        >
          About
        </li>
        <li
          className="list-none w-full text-center p-4 hover:text-rose-500 transition-all cursor-pointer"
          onClick={() => handleClick("projects")}
        >
          Projects
        </li>
        <li
          className="list-none w-full text-center p-4 hover:text-rose-500 transition-all cursor-pointer"
          onClick={() => handleClick("skills")}
        >
          Skills
        </li>
        <li
          className="list-none w-full text-center p-4 hover:text-rose-500 transition-all cursor-pointer"
          onClick={() => handleClick("resume")}
        >
          Resume
        </li>
        <li
          className="list-none w-full text-center p-4 hover:text-rose-500 transition-all cursor-pointer"
          onClick={() => handleClick("contact")}
        >
          Contact
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
