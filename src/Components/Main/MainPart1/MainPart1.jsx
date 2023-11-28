import React from "react";
import "./MainPart1.scss";
export default function MainPart1() {
  return (
    <div className="MainPart1">
      <div className="l-side">
        <h1>
          Lessons and insights <span>from 8 years</span>
        </h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <button>Register</button>
      </div>
      <div className="r-side">
        <img src="/Illustration.svg" alt="" />
      </div>
    </div>
  );
}
