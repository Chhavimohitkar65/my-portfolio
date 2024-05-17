import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-purple-400 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/kri.jpg"
          title="कृषिCart"
          description="A comprehensive platform to simplify access to farming supplies, helping farmers connect with critical resources to support agricultural success. The platform is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrates an Azure-based chatbot for enhanced user support."
          link="https://github.com/your-krishi-cart-repo"
        />

        <ProjectCard
          src="/image.png"
          title="Medico"
          description="Explore the healthcare industry of the future with our cutting-edge site. We have created diabetes and heart disease prediction models using logistic regression. Get personalised suggestions and voice-based results with pyttsx3's unique text-to-speech capability. Have access to actionable insights at your fingertips to stay ahead of your health."
          link="https://github.com/your-medico-repo"
        />

        <ProjectCard
          src="/pjsih.jpeg"
          title="Aawaz"
          description="By overcoming linguistic barriers with multi-language models, Aawaz transforms the railway experience. Through Passenger Kiosk Desks, Interactive Voice Response (IVR), and a Multilingual Chatbot, it ensures inclusive and immersive travel, redefining the journey for all."
          link="https://github.com/your-aawaz-repo"
        />
      </div>
    </div>
  );
};

export default Projects;
