import "./FooterStyles.css";

import React from "react";

import { RiKakaoTalkFill } from "react-icons/ri";

import {
  FaFacebook,
  FaHome,
  FaMailBulk,
  FaPhone,
  FaGithub,
  FaLinkedin,
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
            <a
              className=""
              target="_blank"
              href="https://www.kakaocorp.com/page/service/service/KakaoTalk?lang=ENG&tab=all"
            >
              <RiKakaoTalkFill
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              className=""
              target="_blank"
              href="https://www.linkedin.com/in/%D0%B4%D1%83%D1%80%D0%B1%D0%B5%D0%BA-%D1%8D%D1%80%D0%B3%D0%B0%D1%88%D0%B1%D0%B0%D0%B5%D0%B2-671b87248/"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
          <p className="p2"> &copy;2022 Durbek.e</p>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Footer;
