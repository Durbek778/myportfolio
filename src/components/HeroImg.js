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
        <h3 class="btn-shine">Hello, I`m Durbek</h3>
        <h1>Front-End Developer</h1>
      </div>
    </div>
  );
};

export default HeroImg;
