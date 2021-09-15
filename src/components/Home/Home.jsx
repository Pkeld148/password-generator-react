import { getElementError } from "@testing-library/dom";
import React, { useState, Component } from "react";
import { lower, upper, number, special } from "../../assets/characterArrays";

const Home = () => {
  // onChange={(e) => {
  //     setStockName(e.target.value.toUpperCase());
  //   }}
  const slider = document.getElementById("slider");

  const [passwordLength, setPasswordLength] = useState("22");

  const handleSliderChange = () => {
    setPasswordLength(slider.value);
  };

  return (
    <div>
      <h1>
        <strike>Javascript</strike> React Password Generator
      </h1>
      <div className="container">
        <div className="row">
          <div className="col s6 push-s3">
            <h3>How long would you like your password to be?</h3>
            <form action="#">
              <p class="range-field">
                <input
                  type="range"
                  id="slider"
                  min="8"
                  max="128"
                  onChange={handleSliderChange}
                  // onChange={setPasswordLength(document.getElementById("slider").value)}
                />
              </p>
            </form>
            <h4>{passwordLength}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col s3">
            <div class="switch">
              <label>
                No
                <input type="checkbox" />
                <span class="lever"></span>
                Yes
              </label>
              <h5>Uppercase</h5>
            </div>
          </div>

          <div className="col s3">
            <div class="switch">
              <label>
                No
                <input type="checkbox" />
                <span class="lever"></span>
                Yes
              </label>
              <h5>Lowercase</h5>
            </div>
          </div>
          <div className="col s3">
            <div class="switch">
              <label>
                No
                <input type="checkbox" />
                <span class="lever"></span>
                Yes
              </label>
              <h5>Numbers</h5>
            </div>
          </div>
          <div className="col s3">
            <div class="switch">
              <label>
                No
                <input type="checkbox" />
                <span class="lever"></span>
                Yes
              </label>
              <h5>Special Characters</h5>
            </div>
          </div>
        </div>
        {/* Generated password will display here */}
        <div className="row">
          <h4>HERE IS YOUR PASSWORD:</h4>
          <h5>sddokjsf09asdASD)(J@(SF</h5>
          <h6>{lower}</h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
