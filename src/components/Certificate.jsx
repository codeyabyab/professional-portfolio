import React from "react";
import certificate from "../data/certificate";
import CertificateItem from "./CertificateItem";
import Title from "./Title";

function Certificate() {
  return (
    <div className="mt-10">
      <Title>Certificates</Title>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {certificate.map((cert) => (
            <CertificateItem 
            imgUrl={cert.imgUrl} 
            title={cert.title} 
            source={cert.source}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificate;
