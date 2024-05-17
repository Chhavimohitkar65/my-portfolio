import React from "react";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string; // Add link prop
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-transparent hover:border-[#2A0E61]">
      <img src={src} alt={title} className="w-full h-auto object-cover" />

      <div className="relative p-4 bg-gray-900">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
