import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";

const serviceList = [
  {
    id: "01",
    heading: "Creative Design",
    subHeading: "Designs That Speak Your Brand’s Language.",
    para: "From logos to complete brand identities, we create visually compelling designs that leave a lasting impression.",
  },
  {
    id: "02",
    heading: "Graphic Design",
    subHeading: "Visual Storytelling at Its Best.",
    para: "Enhance your brand presence with custom graphics, illustrations, and digital assets tailored for your audience.",
  },
  {
    id: "03",
    heading: "Content Creation",
    subHeading: "Words That Resonate, Stories That Inspire.",
    para: "Engage your audience with impactful content that conveys your brand’s message through blogs, copywriting, and visuals.",
  },
  {
    id: "04",
    heading: "Digital Marketing",
    subHeading: "Strategic Campaigns for Maximum Impact.",
    para: "Drive results with targeted digital marketing strategies, including SEO, social media management, and paid advertising.",
  },
  {
    id: "05",
    heading: "Web Design & Development",
    subHeading: "Your Digital Presence, Perfected.",
    para: "Build responsive, user-friendly websites designed to captivate and convert visitors into customers.",
  },
];
const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="Creative solutions to elevate your brand."
            sortTitle="Services We Offer"
          />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
