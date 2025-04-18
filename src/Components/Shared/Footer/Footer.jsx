import React from "react";
import { ArrowUpShort, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const socalList = [
  {
    id: 1,
    platfrom: "Facebook",
    icon: <ArrowRight />,
  },
  {
    id: 2,
    platfrom: "Twitter",
    icon: <ArrowRight />,
  },
  {
    id: 3,
    platfrom: "Youtube",
    icon: <ArrowRight />,
  },
  {
    id: 4,
    platfrom: "Instagram",
    icon: <ArrowRight />,
  },
];
const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="fl" data-aos="fade-up" data-aos-duration="1000">
            Get In Touch
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="get__content">
                <p>Innovating Together, Growing Stronger.</p>
                <a href="mailto:hello@cleverhat.xyz">hello@cleverhat.xyz</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get__rightcontetn">
                <div className="row g-4">
                  {socalList.map(({ id, icon, platfrom }) => {
                    return (
                      <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                        <a href="#0" className="social__footer">
                          {platfrom}
                          <i>{icon}</i>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="copyright">
            <p className="white">
              Copyright © 2023{" "}
              <Link to={"/"} className="base">
                &nbsp;CleverHat.
              </Link>{" "}
              All rights reserved.
            </p>
            <ul className="terms">
              <li>
                <a href="#0"> Terms & Condition </a>
              </li>
              <li>
                <a href="#0"> Privacy Policy </a>
              </li>
            </ul>
            <a
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="toparrow"
            >
              <i>
                <ArrowUpShort />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
