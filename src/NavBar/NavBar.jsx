import React, { useEffect, useState } from "react";
import "./NavBar.css";
import $ from "jquery";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  function navOpen() {
    $(".minLinks").slideToggle();
  }

  let [navHeight, setNavHeight] = useState(0);

  function test() {
    let x = $(window).scrollTop();

    if (x !== 0) {
      $(".navBar").removeClass("providePadding");
      $(".navBar").addClass("decreasePadding");
    } else {
      $(".navBar").removeClass("decreasePadding");
      $(".navBar").addClass("providePadding");
    }
    setNavHeight(x);
  }

  useEffect(() => {
    window.addEventListener("scroll", test);
  }, []);

  return (
    <>
      <div className="navBar">
        <div className="container">
          <div className="logo">
            <NavLink to="">START FRAMEWORK</NavLink>
          </div>
          <div className="links ">
            <ul>
              <li>
                <NavLink to="about">About</NavLink>
              </li>
              <li>
                <NavLink to="portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="minNav" onClick={navOpen}>
            <span>
              <i class="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
        <div className="minLinks">
          <div className="container">
            <ul>
              <li>
                <NavLink to="about">About</NavLink>
              </li>
              <li>
                <NavLink to="portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
