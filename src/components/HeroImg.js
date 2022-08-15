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
        <p>Hi, I`m Ergashbaev Durbek </p>
        <h1>Front-End Developer</h1>
        <div></div>
      </div>
    </div>
  );
};

export default HeroImg;
