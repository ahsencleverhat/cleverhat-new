import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { imagesList, projectList } from "../../Utlits/projectList";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import detailbg from "../../assets/img/works/1.webp";
import detailbg1 from "../../assets/img/protfolio/prot-detials2.png";
import detailbg2 from "../../assets/img/protfolio/prot-detials2.png";
import ProjectCard from "../../Components/Shared/ProjectCard/ProjectCard";
import Lightbox from "../../Components/Shared/LightBox/LightBox";
import { socialIcons } from "../../Utlits/socilIcons";

const ProtfolioDetails = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const openLightbox = (index) => {
    setCurrentId(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <>
      <PageHeader heading={"EREENA"} page="EREENA" />
      <section className="protfolio__details pb-120">
        <div className="container">
          <div
            className="details__bigthumb mb-60"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={detailbg} alt="img" />
            <div className="prot__detail__contact">
              <h3>Project Info</h3>
              <div className="prot__itembox">
                <div className="prot__left">
                  <div className="items mb__cus30">
                    <h5>Clients</h5>
                    <p>Nicolas Marko</p>
                  </div>
                  <div className="items">
                    <h5>Date</h5>
                    <p>Sept 19, 2023</p>
                  </div>
                </div>
                <div className="prot__left">
                  <div className="items mb__cus30">
                    <h5>Category</h5>
                    <p>Branding Design</p>
                  </div>
                  <div className="items">
                    <h5>Location</h5>
                    <p>24 Fifth st.,Los Angeles, USA</p>
                  </div>
                </div>
              </div>
              <ul className="social d-flex gap-3">
                {socialIcons.map(({ icon, id }) => (
                  <li key={id}>
                    <Link to={""}>
                      <i>{icon}</i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="details__textwrap">
            <div
              className="text__box mb__cus60"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <p className="fz-16 pra ttext__one">
                Solution: After conducting thorough research and extensive
                documentation, we have produced several films that depict the
                fascinating life cycle of Eri silk and its evolution into a
                luxurious fabric. Our team traveled to remote regions in Assam
                and other parts of India, immersing ourselves in the lives of
                skilled weavers and gaining insight into their daily routines.
                Through our lens, we captured the intricate techniques they use
                and shed light on their way of life. By showcasing the premium
                quality of their products through these films, we were able to
                increase brand sales and bring attention to their lifestyle to a
                wider audience.
              </p>
              <p className="fz-16 pra">
                Problem: Ereena is a luxury clothing brand for women. Their
                exclusive line uses Eri Silk, a rare silk only found in the
                Northeastern states of India. They are eager to promote Eri Silk
                on the global stage through fashion shows, highlighting its
                unique qualities and emphasizing the labor-intensive process
                required to produce this luxurious fabric.
              </p>
            </div>
            <div
              className="details__small"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="thumb">
                <img src={detailbg1} alt="img" />
              </div>
              <div className="thumb">
                <img src={detailbg2} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProtfolioDetails;
