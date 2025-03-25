import React from "react";
import { PlayFill, ArrowRight } from "react-bootstrap-icons";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";

import serDv1 from "../assets/img/project/ser-dv1.png";
import serDv2 from "../assets/img/project/ser-dv2.png";
import detialcontact from "../assets/img/contact/ser-detialcontact.png";
import { ScrollRestoration, useParams } from "react-router-dom";
import { serviceList } from "../Utlits/serviceList";
import video from "../assets/video/background.mp4";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = serviceList.find((item) => item.slug === slug);
  return (
    <>
      <PageHeader heading={`${service.heading}`} page={`${service.heading}`} />
      <section className="service__details overhid pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="ser__left__details">
                <div className="thumb">
                  <img src={`${service.image}`} alt="img" />
                </div>
                <div
                  className="text__box mb__cus60"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="textt36 d-block">
                    About {service.heading} Service
                  </h3>
                  <p className="fz-16 pra ttext__one">{service.description}</p>
                </div>
                <div className="paythumb position-relative rounded-4 overflow-hidden">
                  <img src={serDv2} alt="img" />
                  <a href={video} className="video__80 video-btn">
                    <i>
                      <PlayFill />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service__right__wrap">
                <div className="service__rightbox mb-30">
                  <h3>Service List</h3>
                  {serviceList.map((service, key) => {
                    return (
                      <Link
                        key={key}
                        to={`/service-details/${service.slug}`}
                        className="link__box mb-15"
                      >
                        {service.heading}
                        <i className="bi bi-chevron-right"></i>
                      </Link>
                    );
                  })}
                </div>
                <div className="service__rightbox">
                  <div className="thumb">
                    <img src={detialcontact} alt="img" />
                    <Link to={"/contact"} className="cmn--btn">
                      <span>Contact Me</span>
                      <span>
                        <i>
                          <ArrowRight />
                        </i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default ServiceDetails;
