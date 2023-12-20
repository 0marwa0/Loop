import starIcon from "../../assets/icons/star-icon.svg";
import userImage from "../../assets/images/testimonal-user.png";
import "./index.css";
import React, { useEffect, useState } from "react";
function TestimonalCard(props) {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      if (currentPosition > scrollPosition) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <div class={` ${props.isBlure ? "hide_card" : ""}`}>
      <section
        class={` ${scrollDirection} card-move card${props.number}-move card-move  testimonal-card`}
      >
        <div>
          <div class="d-flex gap-2 align-items-center">
            <img class="testimonal-user-img" src={userImage} alt="" />
            <div class="d-flex flex-column">
              <div className="text-18"> Jessicc</div>
              <div class="testimonal-stars">
                <img
                  class="testimonal-user-img"
                  className="star-icon"
                  src={starIcon}
                  alt=""
                />
                <img
                  class="testimonal-user-img"
                  className="star-icon"
                  src={starIcon}
                  alt=""
                />
                <img
                  class="testimonal-user-img"
                  className="star-icon"
                  src={starIcon}
                  alt=""
                />
                <img
                  class="testimonal-user-img"
                  className="star-icon"
                  src={starIcon}
                  alt=""
                />
                <img
                  class="testimonal-user-img"
                  className="star-icon"
                  src={starIcon}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div>
            <div class="card-text-testimonial">
              Booking with LOOP was the highlight of our celebration! The
              PRINCESS F56 FLY yacht surpassed all expectations. The crew's
              professionalism and meticulous attention to detail made our day
              truly unforgettable.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonalCard;
