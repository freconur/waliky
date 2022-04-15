import React from "react";
import "../styles/SocialMedia.css";
// import '../assets/font/flaticon.css';

const SocialMedia = () => {
  return (
    <div className="Footer__container--icon">
      <a
        href="https://www.facebook.com/walikystore"
        target="_"
        className=" text-reset text-decoration-none container__icon-social"
      >
        <span className="flaticon-001-facebook icon__social"></span>
      </a>
      <a
        href="https://www.instagram.com/walikyperu/"
        target="_"
        className=" text-reset text-decoration-none container__icon-social"
      >
        <span className="flaticon-002-twitter icon__social"></span>
      </a>
      <a
        href="https://www.instagram.com/walikyperu/"
        target="_"
        className=" text-reset text-decoration-none container__icon-social"
      >
        <span className="flaticon-011-instagram icon__social"></span>
      </a>
    </div>
  );
};

export default SocialMedia;
