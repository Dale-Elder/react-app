import React, { Component } from "react";

// Functional component for Navbar with totalCounters prop
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered"); // logs when component is rendered

  // JSX for the Navbar with a badge displaying the totalCounters
  return (
    <nav className="navbar navbar-light bg-light ">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge rounded-pill bg-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar; // export the Navbar component
