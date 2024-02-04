import React, { useRef } from "react";
import "./Contact.css";
export default function Contact() {
  const inp_1_Ref = useRef();
  const inp_2_Ref = useRef();
  const inp_3_Ref = useRef();
  const inp_4_Ref = useRef();

  function checkInputValue(input, selctor) {
    let inputValue = document.querySelector(input).value;
    if (inputValue !== "") {
      selctor.current.style.cssText = " top : -50% ";
    } else {
      selctor.current.style.cssText = " top : 40% ";
    }
  }

  return (
    <>
      <div className="contactSec">
        <div className="container">
          <div className="titleContain">
            <h2 className="title">
              CONATCT SECTION
              <i class="fa-solid fa-star"></i>
            </h2>
          </div>
          <div className="inputs">
            <div className="input">
              <span ref={inp_1_Ref} id="lable_1">
                User Name:
              </span>
              <input
                className="userName"
                type="text"
                onKeyUp={() => checkInputValue(".userName", inp_1_Ref)}
                placeholder="User Name"
              />
            </div>
            <div className="input">
              <span ref={inp_2_Ref} id="lable_2">
                User Age:
              </span>
              <input
                className="userAge"
                onKeyUp={() => checkInputValue(".userAge", inp_2_Ref)}
                type="text"
                placeholder="User Age"
              />
            </div>
            <div className="input">
              <span ref={inp_3_Ref} id="lable_3">
                User Email:
              </span>
              <input
                className="userEmail"
                onKeyUp={() => checkInputValue(".userEmail", inp_3_Ref)}
                type="text"
                placeholder="User Email"
              />
            </div>
            <div className="input">
              <span ref={inp_4_Ref} id="lable_4">
                User Passowrd:
              </span>
              <input
                className="userPassword"
                onKeyUp={() => checkInputValue(".userPassword", inp_4_Ref)}
                type="text"
                placeholder="User Passowrd"
              />
            </div>
            <button className="btn ">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
