import React, { useState, Component, useEffect } from "react";
import { lower, upper, number, special } from "../../assets/characterArrays";

const Home = () => {
  const slider = document.getElementById("slider");

  const [possibleChars, setPossibleChars] = useState([]);
  const [passwordLength, setPasswordLength] = useState("^ Drag the slider! ^");
  const [upperChecked, setUpperChecked] = useState("off");
  const [lowerChecked, setLowerChecked] = useState("off");
  const [numberChecked, setNumberChecked] = useState("off");
  const [specialChecked, setSpecialChecked] = useState("off");

  const [finalPassword, setFinalPassword] = useState(
    "Your generated password will show here!"
  );

  const handleSliderChange = () => {
    setPasswordLength(slider.value);
    generatePassword();
  };

  const handleUpperChange = () => {
    if (upperChecked === "on") {
      setUpperChecked("off");
    } else {
      setUpperChecked("on");
    }
    generatePassword();
  };
  const handleLowerChange = () => {
    if (lowerChecked === "on") {
      setLowerChecked("off");
    } else {
      setLowerChecked("on");
    }
    generatePassword();
  };
  const handleNumberChange = () => {
    if (numberChecked === "on") {
      setNumberChecked("off");
    } else {
      setNumberChecked("on");
    }
    generatePassword();
  };
  const handleSpecialChange = () => {
    if (specialChecked === "on") {
      setSpecialChecked("off");
    } else {
      setSpecialChecked("on");
    }
    generatePassword();
  };

  function generatePassword() {
    let newArray = [];
    let password = [];

    if (upperChecked === "on") {
      newArray.push(upper);
      password.push(upper[Math.floor(Math.random() * upper.length)]);
      setFinalPassword(password);
    }
    if (lowerChecked === "on") {
      newArray.push(lower);
      password.push(lower[Math.floor(Math.random() * lower.length)]);
      setFinalPassword(password);
    }
    if (numberChecked === "on") {
      newArray.push(number);
      password.push(number[Math.floor(Math.random() * number.length)]);
      setFinalPassword(password);
    }
    if (specialChecked === "on") {
      newArray.push(special);
      password.push(special[Math.floor(Math.random() * special.length)]);
      setFinalPassword(password);
    }

    console.log(newArray);
    console.log(newArray.length);
    console.log(password);
  }

  // useEffect(() => {
  //     let newArray = [];
  //     let password = [];

  //     if (upperChecked === "on") {
  //         newArray.push(upper);
  //         password.push(upper[(Math.floor(Math.random() * upper.length))])
  //     }
  //     if (lowerChecked === "on") {
  //         newArray.push(lower);
  //         password.push(lower[(Math.floor(Math.random() * lower.length))])
  //     }
  //     if (numberChecked === "on") {
  //         newArray.push(number);
  //         password.push(number[(Math.floor(Math.random() * number.length))])
  //     }
  //     if (specialChecked === "on") {
  //         newArray.push(special);
  //         password.push(special[(Math.floor(Math.random() * special.length))])
  //     }
  //     console.log(newArray);
  //     console.log(password);
  //     // setFinalPassword(password);

  // },)

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
        {/* Generated password will display here */}
        <div className="row">
          <h4>HERE IS YOUR PASSWORD:</h4>
          <h5>{finalPassword}</h5>
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
