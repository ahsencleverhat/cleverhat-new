import React from "react";
import partner1 from "../../assets/img/clients/1.png";
import partner2 from "../../assets/img/clients/2.png";
import partner3 from "../../assets/img/clients/3.png";
import partner4 from "../../assets/img/clients/4.png";
import partner5 from "../../assets/img/clients/5.png";
import partner6 from "../../assets/img/clients/6.png";
import partner7 from "../../assets/img/clients/7.png";
import partner8 from "../../assets/img/clients/8.png";
import partner9 from "../../assets/img/clients/9.png";
import partner10 from "../../assets/img/clients/10.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

const partnerList = [
  {
    id: 1,
    image: partner1,
  },
  {
    id: 2,
    image: partner2,
  },
  {
    id: 3,
    image: partner3,
  },
  {
    id: 4,
    image: partner4,
  },
  {
    id: 5,
    image: partner5,
  },
  {
    id: 6,
    image: partner6,
  },
  {
    id: 7,
    image: partner7,
  },
  {
    id: 8,
    image: partner8,
  },
  {
    id: 9,
    image: partner9,
  },
  {
    id: 10,
    image: partner10,
  },
];
const Partner = () => {
  return (
    <>
      <div className="sponsor__area pt-120">
        <h4
          className="sponsor__title"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          More than 100+ companies trusted us worldwide
        </h4>
        <div className="swiper sponsor__wrap">
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
            modules={[Pagination, Autoplay, Navigation]}
          >
            {partnerList.map(({ id, image }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="swiper-wrapper">
                    <div key={id} className="sponsor__slide swiper-slide">
                      <img src={image} width={"100%"} alt="img" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
