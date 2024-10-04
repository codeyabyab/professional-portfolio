import React from "react";
import contribution from "../data/contribution";
import ContributionItem from "./ContributionItem";
import Title from "./Title";

function Contribution() {
  return (
    <div className="mt-10">
      <Title>Projects & Companies Involved In</Title>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {contribution.map((project) => (
            <ContributionItem
              imgUrl={project.imgUrl}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contribution;
