import starIcon from "../../assets/icons/star-icon.svg";
import userImage from "../../assets/images/testimonal-user.png";
import "./index.css";
import arrowIcon from "../../assets/icons/arrow-btn.svg";
import TestimonalCard from "./testimonialCard";

import EmilyT from "../../assets/images/Emilyt.png";
import Noor from "../../assets/images/Noor.png";
import MarkL from "../../assets/images/markL.png";
function Testimonials(props) {
  return (
    <div className="testimonal-container">
      <div className="text-center testimonals">Testimonials</div>
      <div className="text-center">
        <div className="testimonal-head ">
          The satisfaction of our clients is at the heart of everything we do
        </div>
      </div>
      <div className="testimonal-cards">
        <TestimonalCard
          isBlure={true}
          name="Jessicc"
          number={1}
          imgUrl={userImage}
          scrollDirection={props.scrollDirection}
        />
        <TestimonalCard
          number={2}
          name="Jessicc"
          imgUrl={userImage}
          scrollDirection={props.scrollDirection}
        />
        <TestimonalCard
          name="Emily T"
          imgUrl={EmilyT}
          number={3}
          scrollDirection={props.scrollDirection}
        />
        <TestimonalCard
          name="Mark L"
          imgUrl={MarkL}
          number={4}
          scrollDirection={props.scrollDirection}
        />
        <TestimonalCard
          name="Noor"
          imgUrl={Noor}
          isBlure={true}
          number={5}
          scrollDirection={props.scrollDirection}
        />
      </div>

      <div>
        <button class="text-white dark_bg reviews-btn">
          VIEW ALL REVIEWS
          <img src={arrowIcon} className="arrow-icon-lg" />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
