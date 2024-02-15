import React, { useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div id="navbar-logo">
          <img id="logo" alt="logo" src="/images/logo.png"></img>
        </div>
        <div className="options">
          <ul>
            <a>
              <div>Jobs</div>
            </a>
          </ul>
          <ul>Companies</ul>
          <ul>Services</ul>
          <ul>
            <input
              id="search"
              placeholder="Search Job Here"
              className="bg-red-500"
            ></input>
            <button className="bg-white">Search</button>
          </ul>
          <ul>Post a job</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
