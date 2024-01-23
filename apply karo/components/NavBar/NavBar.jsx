import React from "react";
import "./NavBar.css";
import logo from "../../public/images/logo.png";

const NavBar = () => {
  const jobSearch = fetch().then((res) => {
    return res;
  });
  return (
    <>
      <div className="navbar">
        <div id="navbar-logo">
          <img id="logo" alt="logo" src="/images/logo.png"></img>
        </div>
        <ul>
          <a>
            <div>Jobs</div>
          </a>
        </ul>
        <ul>Companies</ul>
        <ul>Services</ul>
        <ul>
          <input id="search" placeholder="Search Job Here"></input>
          <button
            onClick={() => {
              jobSearch();
            }}
            style={{ marginLeft: "5px" }}
          >
            Search
          </button>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
