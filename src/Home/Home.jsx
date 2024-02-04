import React from "react";
import "./Home.css";
import { ReactComponent as Logo } from "../images/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="home">
        <Logo className="logo" />
        <h2 className="title">
          START FRAMEWORK
          <i class="fa-solid fa-star"></i>
        </h2>

        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
