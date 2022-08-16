import React from "react";
import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="img" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-detailes">
        <p> {props.text}</p>
        <div className="pro-btns">
          <a className="btn" target="_blank" href={props.view}>
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
