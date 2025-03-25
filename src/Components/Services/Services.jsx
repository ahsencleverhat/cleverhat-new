import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";
import { serviceList } from "../../Utlits/serviceList";

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
          {serviceList.map(({ id, heading, subHeading, para, slug }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
              navigate={slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
