import React from "react";

 import midpic from "../images/giphy1.gif";

import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <section id="hero__left" className="hero__left">
        <h1>More than just shorter links</h1>
        <p>
        Easy and quick, simply input your long link to instantly receive a shortened URL.
        Briefly can shorten links of any length, any link. Make your link shorter instantly.
        Unlimited link shortening and redirection. 
        </p>
        <button
          onClick={() => {
            document
              .getElementById("searchBar")
              .scrollIntoView({ block: "center" });
          }}
        >
          Get Started
        </button>
      </section>
      <section className="hero__right">
        <img src={midpic} alt="" />
      </section>
    </div>
  );
};

export default Hero;