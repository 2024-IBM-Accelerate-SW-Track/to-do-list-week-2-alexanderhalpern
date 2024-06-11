import React, { Component } from "react";
import alexanderhalpern from "../assets/alexanderhalpern.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={alexanderhalpern}
                style={{ width: 300 }}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Alexander Halpern</div>
              <div className="brief_description">
                Rodman Scholar at University of Virginia. I play piano for the
                UVA Jazz Ensemble!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
