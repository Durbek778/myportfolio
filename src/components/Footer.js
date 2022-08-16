import "./FooterStyles.css";

import React from "react";

import { RiKakaoTalkFill } from "react-icons/ri";

import {
  FaFacebook,
  FaHome,
  FaMailBulk,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p> 경기도 성남시 수정구</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +821024656810
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              dergasbaev@gmail.com
            </h4>
          </div>
          <div className="social">
            <a
              className=""
              target="_blank"
              href="https://www.facebook.com/durbek.ergashbaev.589"
            >
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a className="" target="_blank" href="https://github.com/Durbek778">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a className="" target="_blank" href="https://github.com/Durbek778">
              <RiKakaoTalkFill
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Footer;
