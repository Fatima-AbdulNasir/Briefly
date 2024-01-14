import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/header.css";
import Toggler from "./Toggler";

const Header = () => {
  const [toggled, setToggled] = useState();
  return (
    <header className="header">
      <span className="header__logo">Briefly</span>
      <nav data-toggled={toggled}>
        <ul>

        <li> 
          
        <button
          onClick={() => {
            document
              .getElementById("hero__left")
              .scrollIntoView({ block: "center" });
          }}
        >
      About
        </button></li>
        <li>
        <button
          onClick={() => {
            document
              .getElementById("middle__boxArea")
              .scrollIntoView({ block: "center" });
          }}
        >
          Why Briefly?
        </button>
          </li>

          <li>
          <button
          onClick={() => {
            document
              .getElementById("interaction")
              .scrollIntoView({ block: "center" });
          }}
        >
         Contact Us
        </button>
            
           </li>
        </ul>
      </nav>
      {/* <section className="header__authLinks" data-toggled={toggled}>
  
        <button className="HeaderButton">Sign-Out</button>
      </section>
      <Toggler toggled={toggled} setToggled={setToggled} /> */}
    </header>
  );
};

export default Header;