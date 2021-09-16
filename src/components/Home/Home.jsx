import React, { useState, Component, useEffect } from "react";
import { lower, upper, number, special } from "../../assets/characterArrays";

const Home = () => {
  const slider = document.getElementById("slider");

  //   const [possibleChars, setPossibleChars] = useState([]);
  const [passwordLength, setPasswordLength] = useState("^ Drag the slider! ^");
  const [sliderValue, setSliderValue] = useState("40");
  const [upperChecked, setUpperChecked] = useState("off");
  const [lowerChecked, setLowerChecked] = useState("off");
  const [numberChecked, setNumberChecked] = useState("off");
  const [specialChecked, setSpecialChecked] = useState("off");

  const [finalPassword, setFinalPassword] = useState(
    "Your generated password will show here!"
  );

  const handleUpperChange = () => {
    if (upperChecked === "on") {
      setUpperChecked("off");
    } else {
      setUpperChecked("on");
    }
    // generatePassword();
  };
  const handleLowerChange = () => {
    if (lowerChecked === "on") {
      setLowerChecked("off");
    } else {
      setLowerChecked("on");
    }
    // generatePassword();
  };
  const handleNumberChange = () => {
    if (numberChecked === "on") {
      setNumberChecked("off");
    } else {
      setNumberChecked("on");
    }
    // generatePassword();
  };
  const handleSpecialChange = () => {
    if (specialChecked === "on") {
      setSpecialChecked("off");
    } else {
      setSpecialChecked("on");
    }
    // generatePassword();
  };

  function generatePassword() {
    let newArray = [];
    let password = [];
    let counter = 0;

    if (upperChecked === "on") {
      newArray.push(upper);
      password.push(upper[Math.floor(Math.random() * upper.length)]);
      setFinalPassword(password);
      counter++;
    }
    if (lowerChecked === "on") {
      newArray.push(lower);
      password.push(lower[Math.floor(Math.random() * lower.length)]);
      setFinalPassword(password);
      counter++;
    }
    if (numberChecked === "on") {
      newArray.push(number);
      password.push(number[Math.floor(Math.random() * number.length)]);
      setFinalPassword(password);
      counter++;
    }
    if (specialChecked === "on") {
      newArray.push(special);
      password.push(special[Math.floor(Math.random() * special.length)]);
      setFinalPassword(password);
      counter++;
    }

    let allChars = [].concat(...newArray);

    for (counter; counter < passwordLength; counter++) {
      password.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    console.log(allChars);
    console.log(passwordLength);
    // console.log(newArray);
    // console.log(newArray.length);
    console.log(password);
  }

  const handleSliderChange = () => {
    setPasswordLength(slider.value);
    // generatePassword();
  };

  const handleButtonClick = () => {
    console.log("You clicked the button!")
    generatePassword();
  }

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
              <h5>Uppercase Letters</h5>
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
              <h5>Lowercase Letters</h5>
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
        <a
          class="waves-effect waves-light btn-large"
          onClick={handleButtonClick}
        >
          GENERATE PASSWORD!
        </a>
        {/* Generated password will display here */}
        <div className="row">
          {/* <h4>HERE IS YOUR PASSWORD:</h4> */}
          <h5>{finalPassword}</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
