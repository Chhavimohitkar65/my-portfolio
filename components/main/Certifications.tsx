import React from "react";

const certificationsData = [
  {
    id: 5,
    src: "/microsoft1_page-0001.jpg",
    title: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "Feb 2024",
  },
  {
    id: 6,
    src: "/irrs.jpg",
    title: "Geodata processing using python ",
    issuer: "IIRS & ISRO",
    date: "Feb 2024",
  },

  {
    id: 7,
    src: "/ETHNUS.jpg",
    title: "MERN full Stack Developer Internship at Ethnus",
    issuer: "ETHNUS",
    date: "Dec 2023",
  },
  {
    id: 8,
    src: "/nptel.jpg",
    title: " Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "May 2024",
  },
  {
    id: 1,
    src: "/AWS.jpg",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Feb 2024",
    certificateLink: "/AWS_certificate.pdf", // Example link
  },
  {
    id: 2,
    src: "/CMicrosoft.jpg",
    title: "Build a computer vision app with Azure Cognitive Services",
    issuer: "Microsoft",
    date: "Dec 2022",
  },
  {
    id: 3,
    src: "/CGoogle.jpg",
    title: "Design a UX for Social Good & Prepare for Jobs",
    issuer: "Google",
    date: "Dec 2023",
  },
  {
    id: 4,
    src: "/Cuom.jpg",
    title: "Applied Machine Learning in Python",
    issuer: "University of Michigan",
    date: "Dec 2022",
  },
];

const Certifications = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="certifications"
    >
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#FFFFFF] py-20">
        My Certifications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-10">
        {certificationsData.map((certification) => (
          <div
            key={certification.id}
            className="rounded-lg border z-10 border-[#371652] text-center overflow-hidden hover:shadow-md"
          >
            {certification.certificateLink ? (
              <a
                href={certification.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={certification.src}
                  alt={certification.title}
                  className="w-full h-auto"
                  style={{
                    transition: "transform 0.3s ease",
                  }}
                />
              </a>
            ) : (
              <img
                src={certification.src}
                alt={certification.title}
                className="w-full h-auto"
                style={{
                  transition: "transform 0.3s ease",
                }}
              />
            )}
            <div className="mt-4">
              <h3
                className="text-[#ffffff] font-semibold"
                style={{ fontSize: "18px" }}
              >
                {certification.title}
              </h3>
              <p className="text-sm text-gray-400">
                Issued by: {certification.issuer}
              </p>
              <p className="text-sm text-gray-400">
                Date: {certification.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
