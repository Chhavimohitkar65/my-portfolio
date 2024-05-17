import React from "react";

import AchievementCard from "../sub/AchievementCard";

const Achievements = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="achievements"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-purple-400 py-20">
        Achievements
      </h1>
      <div className="flex justify-center gap-8 px-10 text-gray-400">
        <AchievementCardContainer>
          <AchievementCard
            src="/SIH1.jpeg"
            title="Smart India Hackathon, Feb 2024"
            description="Beyond the Finish Line: SIH 2023, Where Ideas Gain Momentum!🚀

            Grateful for the incredible journey at SIH 2023! Although we didn't clinch the victory, the experience is priceless. Our team developed groundbreaking solutions for Indian Railways:
            
            🛤️ Multilingual Kiosks.
            
            📞 Multilingual IVR
            
            📧 Mailing Systems and
            
            🤖 Chat Bot "
          />
        </AchievementCardContainer>
        <AchievementCardContainer>
          <AchievementCard
            src="/IDE1.jpeg"
            title="Innovation Design and Entrepreneurship (IDE) BOOTCAMP Phase 2, Feb 2024"
            description="Celebrating our team's selection for the IDE BOOTCAMP Phase 2 by MIC and AICTE! Despite narrowly missing the mark, the experience at SYMBIOSIS INTERNATIONAL UNIVERSITY was invaluable. Lessons learned will fuel our future endeavors. "
          />
        </AchievementCardContainer>
      </div>
    </div>
  );
};

const AchievementCardContainer = ({ children }) => {
  return <div className="flex-1">{children}</div>;
};

export default Achievements;
