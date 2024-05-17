import React from "react";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="skills"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#FFFFFF] py-20">
        My Skill
      </h1>
      <div
        className="flex flex-col items-center justify-center px-100 "
        style={{ flexDirection: "column" }}
      >
        {/* Web Skills */}
        <div className="mb-6  ">
          <SkillText
            title="Web Development"
            imageSrcs={[
              "/html.png",
              "/css.png",
              "/js.png",
              "/react.png",
              "/mongodb.png",
              "/next.png",
              "/node-js.png",
              "/express.png",
              "/tailwind.png",
            ]}
            description={""}
          />
        </div>

        {/* Design Skills */}
        <div className="mb-6">
          <SkillText
            title="UIUX "
            imageSrcs={["/figma.png", "/canva.jpeg", "/xd.png"]}
            description={""}
          />
        </div>

        {/* Other Skills */}
        <div className="mb-6">
          <SkillText
            title="Languages"
            imageSrcs={["/python.jpeg", "/java.png"]}
            description={""}
          />
        </div>

        <div className="mb-6">
          <SkillText
            title="Main Domain"
            imageSrcs={[]}
            description={
              "Generative AI , Machine Learning , NLP , Deep Learning , OpenCV "
            }
          />
        </div>
      </div>
      
    </div>
  );
};

export default Skills;
