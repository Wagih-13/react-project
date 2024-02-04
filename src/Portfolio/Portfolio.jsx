import React from "react";
import image_1 from "../images/poert1.png";
import image_2 from "../images/port2.png";
import image_3 from "../images/port3.png";
import "./Portfolio.css";
export default function Portfolio() {
  function tot(image) {
    let overLay = document.querySelector(".slider");
    overLay.style.cssText = `  display: flex;`;
    document.querySelector(
      ".slider picture"
    ).innerHTML = `<img src=${image} alt="" />`;
  }

  function slideNone(eInfo) {
    if (eInfo.target !== document.querySelector(".slider img")) {
      let slider = document.querySelector(".slider");
      slider.style.cssText = `display: none;`;
    }
  }

  return (
    <>
      <div className="portfolio">
        <div className="slider" onClick={(eInfo) => slideNone(eInfo)}>
          <picture></picture>
        </div>
        <div className="container">
          <div className="titleContain">
            <h2 className="title">
              PORTFOLIO COMPONENT
              <i class="fa-solid fa-star"></i>
            </h2>
          </div>
          <div className="gallary">
            <div className="card" onClick={() => tot(image_1)}>
              <img src={image_1} alt="" />
              <div className="Lay">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card" onClick={() => tot(image_1)}>
              <img src={image_1} alt="" />
              <div className="Lay">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card" onClick={() => tot(image_2)}>
              <img src={image_2} alt="" />
              <div className="Lay">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card" onClick={() => tot(image_2)}>
              <img src={image_2} alt="" />
              <div className="Lay">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card" onClick={() => tot(image_3)}>
              <img src={image_3} alt="" />
              <div className="Lay">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="card " onClick={() => tot(image_3)}>
              <img src={image_3} alt="" />
              <div className="Lay">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
