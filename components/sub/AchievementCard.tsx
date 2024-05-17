import React from "react";
import { RxWidth } from "react-icons/rx";

interface Props {
  src: string;
  title: string;
  description: string;
}

const AchievementCard: React.FC<Props> = ({
  src,
  title,
  description,
}: Props) => {
  return (
    <div className="relative w-150 h-96 border border-[#72199f] overflow-hidden flex">
      <div className="w-1/2 h-full flex justify-center items-center">
        {" "}
        {/* Modified */}
        <img
          src={src}
          alt={title}
          className="object-cover h-full max-w-full opacity-100 transition-opacity duration-300 hover:opacity-80" // Modified
        />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center bg-black bg-opacity-50 text-white p-4">
        <h1 className="text-xl font-semibold mb-2">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
export default AchievementCard;
