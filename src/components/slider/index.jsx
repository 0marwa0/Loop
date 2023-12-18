import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowProps } from "react-multi-carousel/lib/types";

import arrowLfet from "../../assets/icons/icon-long-arrow-left.svg";
import arrowRight from "../../assets/icons/icon-long-arrow-right.svg";
import "./index.css";
import slide1 from "../../assets/slideImage/slide1.png";
import slide2 from "../../assets/slideImage/slide2.png";
import slide3 from "../../assets/slideImage/slide3.png";
import slide4 from "../../assets/slideImage/slide4.png";
function MultiCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide, totalItems, slidesToShow },
    } = rest;

    return (
      <div>
        <div className="carousel-button-group">
          <button
            aria-label="Go to previous slide"
            className={
              currentSlide === 0
                ? "disable"
                : " react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
            }
            onClick={() => previous()}
          >
            <img src={arrowRight} />
          </button>
          <div
            aria-label="Go to next slide"
            className={
              currentSlide === totalItems - slidesToShow
                ? "disable"
                : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right slider-btn-container"
            }
            onClick={() => next()}
          >
            <img src={arrowLfet} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Carousel
        centerMode={true}
        swipeable={true}
        draggable={false}
        enderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        arrows={false}
        responsive={responsive}
      >
        <div className="slide-item">
          <img src={slide1} />
        </div>
        <div className="slide-item">
          <img src={slide2} />
        </div>
        <div className="slide-item">
          <img src={slide3} />
        </div>
        <div className="slide-item">
          <img src={slide4} />
        </div>
        <div className="slide-item">
          <img src={slide2} />
        </div>
        <div className="slide-item">
          <img src={slide2} />
        </div>
        <div className="slide-item">
          <img src={slide2} />
        </div>
        <div className="slide-item">
          <img src={slide2} />
        </div>
      </Carousel>
    </div>
  );
}

export default MultiCarousel;
