import React from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/jpg/c1.jpg";
import img2 from "../assets/jpg/c2.jpg";
import img3 from "../assets/jpg/c3.jpg";

function Carousal() {
  return (
    <div className="carousal">
      <Carousel
        className="cr"
        centerMode
        autoPlay
        renderThumbs={() => {}}
        infiniteLoop
        interval={3000}
      >
        <div className="cr-img">
          <img src={img1} />
        </div>
        <div className="cr-img">
          <img src={img2} />
        </div>
        <div className="cr-img">
          <img src={img3} />
        </div>
      </Carousel>
    </div>
  );
}

export default Carousal;
