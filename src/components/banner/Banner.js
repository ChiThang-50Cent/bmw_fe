import banner1 from "./images/banner1.png";
import banner2 from "./images/banner2.jpg";
import banner3 from "./images/banner3.jpg";
import flash_sale from "./images/flash_sale.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

export default function Banner() {
  return (
    <div className="container">
      <div className="banner__container">
        <div className="slide__show">
          <Slider {...settings}>
            <div className="slide__item">
              <img src={banner1} alt="" />
            </div>
            <div className="slide__item">
              <img src={banner2} alt="" />
            </div>
            <div className="slide__item">
              <img src={banner3} alt="" />
            </div>
          </Slider>
        </div>
        <div className="banner__content">
          <img src={flash_sale} alt="" className="banner__image" />
        </div>
      </div>
    </div>
  );
}
