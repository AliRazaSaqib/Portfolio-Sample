/** @format */

import React from "react";
import "./topbar.scss";

export default function Topbar({ menuOpen, setmenuOpen }) {
  return (
    <div className="topnav_wraper">
      <div className={"navbar " + (menuOpen && "active")}>
        <div className="nav_left">
          <a href="#intro" className="nav_logo">
            Developer.
          </a>
          <div className="nav_items">
            <ul>
              <li>
                <a href="#intro">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav_right">
          <div className="hamburger" onClick={() => setmenuOpen(!menuOpen)}>
            <span className="line_1"></span>
            <span className="line_2"></span>
            <span className="line_3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
