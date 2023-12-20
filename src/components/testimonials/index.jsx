import starIcon from "../../assets/icons/star-icon.svg";
import userImage from "../../assets/images/testimonal-user.png";
import "./index.css";
import arrowIcon from "../../assets/icons/arrow-btn.svg";
import TestimonalCard from "./testimonialCard";

function Testimonials() {
  return (
    <>
      <div className="my-4">
        <div className="testimonal-container">
          <div className="text-center testimonals">Testimonials</div>
          <div className="text-center">
            <div className="testimonal-head ">
              The satisfaction of our clients is at the heart of everything we
              do
            </div>
          </div>
          <div className="testimonal-cards text-center">
            <TestimonalCard isBlure={true} number={1} />
            <TestimonalCard number={2} />
            <TestimonalCard number={1} />
            <TestimonalCard number={1} />
            <TestimonalCard isBlure={true} number={1} />
          </div>

          <div>
            <button class="btn pramary-btn text-white dark_bg reviews-btn">
              VIEW ALL REVIEWS
              <img src={arrowIcon} className="arrow-icon-lg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
