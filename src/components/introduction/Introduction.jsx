/** @format */

import React from "react";
import "./introduction.scss";
import { ArrowBackIos } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Introduction() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backSpeed: 40,
      backDelay: 1000,
      strings: [
        "Web development",
        "Frontend development",
        "Wordpress development",
      ],
    });
  }, []);

  return (
    <div className="intro_wraper" id="intro">
      <div className="left_container">
        <div className="image_container">
          <img src="assets/image.png" alt=" Not Showing" />
        </div>
      </div>
      <div className="right_container">
        <div className="content_container">
          <h2>Hi There, I'M</h2>
          <h1>Ali Raza</h1>
          <h3>I Will The Things Easy For You!</h3>
          <h4>
            Expert In <span ref={textRef}></span>
          </h4>
        </div>

        <div className="arrow_down">
          <a href="#portfolio">
            <ArrowBackIos className="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}
