import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/back3.webp";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask ">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <h3 class="btn-shine">I am Bek</h3>
        <h3 class="btn-shine2">Front-End Developer</h3>
        {/* <svg width="100%" height="100%">
          <defs>
            <style>
              @import
              url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");
            </style>
          </defs>
          <text x="50%" y="60%" text-anchor="middle">
            I am Bek
          </text>
        </svg> */}
      </div>
    </div>
  );
};

export default HeroImg;
