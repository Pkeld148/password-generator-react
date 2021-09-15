import React, { useState, Component } from "react";
import { lower, upper, number, special } from "../../assets/characterArrays";

const Home = () => {
  const slider = document.getElementById("slider");
  const upperSwitch = document.getElementById("uppercase");

  //   const [possibleChars, setPossibleChars] = useState([]);
  const [passwordLength, setPasswordLength] = useState("^ Drag the slider! ^");
  const [includeLowercase, setIncludeLowercase] = useState();
  const [upperChecked, setUpperChecked] = useState("off");
  const [lowerChecked, setLowerChecked] = useState("off");
  const [numberChecked, setNumberChecked] = useState("off");
  const [specialChecked, setSpecialChecked] = useState("off");

  const handleSliderChange = () => {
    setPasswordLength(slider.value);
  };

  const handleUpperChange = () => {
    if (upperChecked === "on") {
      setUpperChecked("off");
    } else {
      setUpperChecked("on");
    }
  };
  const handleLowerChange = () => {
    if (lowerChecked === "on") {
      setLowerChecked("off");
    } else {
      setLowerChecked("on");
    }
  };
  const handleNumberChange = () => {
    if (numberChecked === "on") {
      setNumberChecked("off");
    } else {
      setNumberChecked("on");
    }
  };
  const handleSpecialChange = () => {
    if (specialChecked === "on") {
      setSpecialChecked("off");
    } else {
      setSpecialChecked("on");
    }
  };

  //   console.log(upperChecked);

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
                <input
                  type="checkbox"
                  id="uppercase"
                  value={upperChecked}
                  onChange={handleUpperChange}
                />
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
                <input
                  type="checkbox"
                  id="lowercase"
                  value={lowerChecked}
                  onChange={handleLowerChange}
                />
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
                <input
                  type="checkbox"
                  id="number"
                  value={numberChecked}
                  onChange={handleNumberChange}
                />
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
                <input
                  type="checkbox"
                  id="special"
                  value={specialChecked}
                  onChange={handleSpecialChange}
                />
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
          {upperChecked === "on" && <h6>Uppercase Included</h6>}
          {lowerChecked === "on" && <h6>Lowercase Included</h6>}
          {numberChecked === "on" && <h6>Numbers Included</h6>}
          {specialChecked === "on" && <h6>Specials Included</h6>}

        </div>
      </div>
    </div>
  );
};

export default Home;
