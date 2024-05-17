import React from "react";

interface SkillTextProps {
  title: string;
  description: string;
  imageSrcs: string[];
}

const SkillText: React.FC<SkillTextProps> = ({
  title,
  description,
  imageSrcs,
}) => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-white text-lg font-semibold mb-2">{title}</h1>
      {/* Content */}
      <div className="bg-shadow-lg bg-gradient-to-r from-purple-500 to-[#580a5f] rounded-lg shadow-md p-6 mb-6">
        {/* Images */}
        <div className="flex justify-center space-x-2 mb-4">
          {imageSrcs.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${title} Image`}
              className="h-16 w-16"
            />
          ))}
        </div>
        {/* Description */}
        <p className="text-white text-sm text-center">{description}</p>
      </div>
    </div>
  );
};

export default SkillText;
