import React from "react";

const extracurricular: React.FC = () => {
  return (
    <section
      className="py-20 flex flex-col items-center justify-center "
      id="extracurricular"
    >
      <div className="mb-16">
        <div className="mb-16">
          <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-purple-500  py-10 text-center">
            My Extracurricular
          </h2>
          <ul
            className="text-[15px] text-[#FFFFFF] border border-[#550080] p-4 rounded-md "
            style={{ boxShadow: "0 0 20px #f2ccff" }}
          >
            <li className="mb-4">
              Finalist of Smart India Hackathon in Software Edition organized by
              (AICTE) and (MIC), Dec 2023
            </li>
            <li className="mb-4">
              Qualified stage 3 round of TECHgium Hackathon of L&T Technology
              Services, Feb 2024
            </li>
            <li className="mb-4">
              Participated in Innovation, Design, and Entrepreneurship (IDE)
              Bootcamps (Phase II) offered by the (MIC) and (AICTE) , Jan 2024
            </li>
            <li className="mb-4">
              Finalist at VITUnplugged Collage Hackathon , Mar 2024
            </li>
            <li className="mb-4">
              Participated in the Nagpur Cluster Level, Maharashtra State Skills
              Competition, IndiaSkills 2023-24
            </li>
            <li className="mb-4">
              Participated in Pentathon organized by National Critical
              Information Infrastructure Protection Center (NCIIPC), (AICTE) and
              (MIC), Mar 2024
            </li>
            <li className="mb-4">
              Centre for Innovation in Teaching & Learning | Secretary Aug’23 -
              Present
            </li>
            <li className="mb-4">
              Participated in Google Girl Hackathon , Apr 2024
            </li>
            <li className="mb-4">
              Contributor in GirlScript Summer of Code , May 2024
            </li>
            <li className="mb-4">
              TedxVITBHOPAL Chapter | Core Member Jun’23 - Present
            </li>
            <li className="mb-4">
              Dev Code Community | Design Lead Jun’23 - Nov’23
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default extracurricular;
