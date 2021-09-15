import React, { Component } from "react";
import {lower, upper, number, special} from "../../assets/characterArrays";

class Home extends Component {
  render() {
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
                  <input type="range" id="test5" min="8" max="128" />
                </p>
              </form>
              <h4>69</h4>
            </div>
          </div>
          <div className="row">
            <div className="col s3">
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" />
                  <span class="lever"></span>
                  On
                </label>
                <h5>Uppercase</h5>
              </div>
            </div>

            <div className="col s3">
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" />
                  <span class="lever"></span>
                  On
                </label>
                <h5>Lowercase</h5>
              </div>
            </div>
            <div className="col s3">
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" />
                  <span class="lever"></span>
                  On
                </label>
                <h5>Numbers</h5>
              </div>
            </div>
            <div className="col s3">
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" />
                  <span class="lever"></span>
                  On
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
  }
}

export default Home;
