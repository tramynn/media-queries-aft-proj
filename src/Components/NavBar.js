import React, { Component } from "react";
import "../styles/NavBar.css";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <nav>
          <div>
            <h1>Start Bootstrap</h1>
          </div>
          <div>
            <ul>
              <li>Services</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Team</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
