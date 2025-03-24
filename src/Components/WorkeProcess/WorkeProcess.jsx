import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Creative",
    info: "Innovative storytelling and dynamic visuals that captivate audiences, transforming ideas into powerful, memorable brand experiences.",
    list: [],
  },
  {
    id: 2,
    title: "Performance",
    info: "High-impact strategies and optimized solutions that drive results, ensuring every project delivers measurable success and growth.",
    list: [],
  },
  {
    id: 3,
    title: "Technology",
    info: "Leveraging advanced tools and techniques to push creative boundaries, bringing immersive, tech-driven experiences to life.",
    list: [],
  },
];
const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle="Our Process, Your Success."
          sortTitle="Working Process"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
