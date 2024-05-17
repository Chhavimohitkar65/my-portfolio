import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-black backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/mylogo.png"
            alt="logo"
            width={70}
            height={60}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300"></span>
        </a>

        <div className="flex items-center justify-between w-auto h-auto border border-[#dd99ff] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <a
            href="#about-me"
            className="cursor-pointer ml-4 hover:text-gray-400"
          >
            About
          </a>
          <a href="#skills" className="cursor-pointer ml-4 hover:text-gray-400">
            Skills
          </a>
          <a
            href="#extracurricular"
            className="cursor-pointer ml-4 hover:text-gray-400"
          >
            Extracurricular
          </a>
          <a
            href="#projects"
            className="cursor-pointer ml-4 hover:text-gray-400"
          >
            Projects
          </a>
          <a
            href="#certifications"
            className="cursor-pointer ml-4 hover:text-gray-400"
          >
            Certifications
          </a>
          <a
            href="#achievements"
            className="cursor-pointer ml-4 hover:text-gray-400"
          >
            Achievements
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
