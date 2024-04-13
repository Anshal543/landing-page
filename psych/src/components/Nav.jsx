import React from "react";
import "../components/Nav.css";

const Nav = () => {
  return (
    <div>
      <div className="intro">
        <h2>Walter Scott Newsom, PH.D.</h2>
        <p className="para">Licensed Psychologist</p>
      </div>
      <div className="nav-img">
        <ul className="list">
          <li className="nav-li">Home</li>
          <li className="nav-li">About Me</li>
          <li className="nav-li">Services</li>
          <li className="nav-li">Client Info</li>
          <li className="nav-li">Request an Appointment</li>
          <li className="nav-li">Contact</li>
        </ul>
        <div className="text-outer-div">
          <h1 className="nav-text">
            The Best PSY.D Program in Clinical Psychologist
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Nav;
