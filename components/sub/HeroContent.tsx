"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import Image from "next/image";
import profilePhoto from "../../public/photo.jpg";

// Import the profile photo

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Flexbox container */}

        <div className="flex flex-row justify-right items-start gap-5">
          {/* Left side containing "I'm" and "Chhavi Mohitkar" */}
          <div className="flex flex-col text-white">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="cursor-pointer text-6xl font-bold w-3 h-9"
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                marginLeft: "10px",
                whiteSpace: "nowrap",
                padding: "0 10px",
              }}
            >
              Hello, I&apos;m
            </motion.div>

            <motion.div
              variants={slideInFromLeft(0.5)}
              className="text-6xl font-bold max-w-[600px] justify-right"
            >
              {/* Text */}
              <span
                className="cursor-pointer max-w-[600px] text-justify text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#FFFFFF]"
                style={{ whiteSpace: "nowrap", padding: "0 10px" }}
              >
                Chhavi Mohitkar
              </span>
            </motion.div>

            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[8px] px-[7px] border border-[#f2ccff] opacity-[0.9]"
              style={{
                marginTop: "50px",
              }}
            >
              <Link href="https://drive.google.com/drive/folders/1H1uu-LwFKa2h0NmYI57Xzet9GoyI08uL?usp=sharing">
                <span className="block bg-gradient-to-r from-purple-500 to-[#350032] rounded-full px-5 py-2 sm:w-fit from-primary-500 to-secondary-500 hover:bg-slate-800 text-white">
                  Download Resume
                </span>
              </Link>
            </motion.div>

            <div className="flex items-center justify-between">
              <div className="flex items-center justify-around">
                <motion.div
                  variants={slideInFromTop}
                  className="Welcome-box py-[8px] px-[7px]  opacity-[0.9]"
                  style={{
                    marginTop: "40px",
                  }}
                >
                  <Link
                    href="https://github.com/Chhavimohitkar65"
                    className="block rounded-full px-5 py-2 sm:w-fit"
                  >
                    <RxGithubLogo />
                  </Link>
                </motion.div>

                <motion.div
                  variants={slideInFromTop}
                  className="Welcome-box py-[8px] px-[7px]  opacity-[0.9]"
                  style={{
                    marginTop: "40px",
                  }}
                >
                  <Link
                    href="https://www.linkedin.com/in/chhavimohitkar"
                    className="block rounded-full px-5 py-2 sm:w-fit "
                  >
                    <RxLinkedinLogo />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right side containing the image */}
          <motion.div
            variants={slideInFromRight(0.2)}
            className="w-300 h-300 flex justify-end cursor-pointer items-end relative" // Added 'relative' class
            style={{ marginTop: "70px", marginLeft: "140px" }}
          >
            {/* White Shadow */}
            <svg
              className="absolute inset-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              fill="none"
              stroke="#f2ccff" // Set the color of the white shadow
              strokeWidth="10" // Adjust the thickness of the rays
            >
              <circle cx="150" cy="150" r="140" /> {/* Circle for shadow */}
            </svg>

            {/* Profile Image */}
            <Image
              src={profilePhoto}
              alt="Chhavi Mohitkar"
              height={400}
              width={300}
              className="rounded-full cursor-pointer relative z-10" // Added 'relative' and 'z-10' class
              style={{ boxShadow: "0 0 20px #f2ccff" }} // Set the shadow around the image
            />
          </motion.div>
        </div>

        {/* Paragraph and SVG grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-10">
          {/* Paragraph */}
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="text-gray-400 max-w-[600px]  cursor-pointer text-justify"
            style={{ fontSize: "15px" }}
          >
            <h2 className="text-4xl font-bold text-white mb-4 " id="about-me">
              About Me
            </h2>
            <p>
              A Computer Science student at VIT Bhopal, specializing in AIML. I
              am an enthusiastic tech enthusiast who is particularly interested
              in computer vision, artificial intelligence, and machine learning.
              I am also inspired to investigate the nexus between technology and
              social effects. My interest in programming languages like Python
              and Java led to a deeper investigation of sophisticated
              machine-learning methods and artificial intelligence frameworks at
              the beginning of my technological adventure.
            </p>

            <p>
              I have developed my abilities in a variety of technological
              fields, including web development technologies like the MERN
              stack, with a background in computer science and a focus on
              artificial intelligence and machine learning. I have expertise in
              creating smooth user experiences, and I am always looking for new
              and creative methods to combine technology with usability.
            </p>
            <p>
              Along with my technical skills, I am actively learning more about
              Azure services since I am intrigued by the possibility of using
              them to build ML models and intelligent apps in a scalable manner.
              I cant wait to use these technologies, such Cognitive Services and
              Azure Machine Learning, to address issues in the real world and
              promote progress. I have had the honor of working on significant
              initiatives that combine my commitment for social good with my
              technical competence throughout my academic and professional
              pursuits.
            </p>
            <p>
              Aside from technology, I love to read, create graphics, and
              travel. I really think that having a variety of hobbies may work
              in unison to promote creativity and personal development. I am
              eager to work with groups and people that share my values in order
              to push the limits of technology and together build a better
              future. Together, lets get started on this innovative and
              impactful path!
            </p>
          </motion.div>

          {/* SVG Image */}
          <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex justify-center cursor-pointer items-center"
          >
            <Image src="/4.png" alt="work icons" height={350} width={350} />
          </motion.div>
        </div>

        {/* Education section */}
        <motion.a
          variants={slideInFromLeft(1.2)}
          className="py-2 cursor-pointer rounded-lg border border-[#550080] opacity-[0.9] px-4 s text-center text-[#FFFFFF] max-w-[600px] mt-10"
          style={{ fontSize: "14px", boxShadow: "0 0 20px #f2ccff " }}
        >
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-purple-400 py-10">
            Education
          </h1>
          <p>
            Undergraduation - VIT Bhopal University, Batch of 2025
            <br />
            <br />
            11th-12th - Santaji Mahavidyalaya, Nagpur, Batch of May 2021
            <br />
            <br />
            10th - St. Claret School, Nagpur, Batch of May 2019
          </p>
          <br />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
