import React from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Service = ({ heading, subHeading, para, id, navigate }) => {
  return (
    <div
      className="service__unique__item pb-40 pt-40"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="left__service">
        <div className="serial__adjust">
          <span> {id} </span>
          <div className="cont">
            <h5>{subHeading}</h5>
            <h2>
              <Link to={`/service-details/${navigate}`}> {heading} </Link>
            </h2>
          </div>
        </div>
        <p className="pra">{para}</p>
      </div>
      <Link to={`/service-details/${navigate}`} className="common__icon">
        <ArrowUpRight className="i" />
      </Link>
    </div>
  );
};

export default Service;
