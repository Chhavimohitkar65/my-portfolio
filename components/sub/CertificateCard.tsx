import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  issuer: string;
  date: string;
  certificateLink: string;
}

const CertificateCard: React.FC<Props> = ({
  src,
  title,
  issuer,
  date,
  certificateLink,
}) => {
  return (
    <a
      href={certificateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#ee75e4]">
        <div className="aspect-w-16 aspect-h-9">
          <Image
            src={src}
            alt={`${title} Certificate`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-1 text-sm text-gray-300">Issued by: {issuer}</p>
          <p className="mt-1 text-sm text-gray-300">Date: {date}</p>

          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300"
          >
            View Certificate
          </a>
        </div>
      </div>
    </a>
  );
};

export default CertificateCard;
