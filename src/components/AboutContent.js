import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import me1 from "../assets/me3.jpg";

const AboutContent = () => {
  return (
    <div className="wrapper">
      <h1>Who am I ?</h1>
      <div className="about">
        <div className="left">
          <p>
            Hello world! I am Ergashbaev Durbek (벡) a Front-End Developer. My
            future career fucus is coding and I am ready to accept any
            challenge, in any complexity, at any time in order to get my goal.
          </p>
          <Link to="./contact">
            <button className="btn"> Contact</button>
          </Link>
        </div>
        <div className="right">
          <div className="img-stack">
            <img src={me1} className="img" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
