import React from "react";
import "./ContactBackground.css";

export default function ContactBackground() {
  return (
    <div className="contact-bg">

      <svg className="wave wave1" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path className="path1" d="M0,140 C360,200 1080,60 1440,140" />
      </svg>

      <svg className="wave wave2" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path className="path2" d="M0,180 C380,240 1000,100 1440,180" />
      </svg>

      <svg className="wave wave3" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path className="path3" d="M0,220 C400,280 980,140 1440,220" />
      </svg>

      <svg className="wave wave4" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path className="path4" d="M0,260 C420,320 960,180 1440,260" />
      </svg>

    </div>
  );
}
