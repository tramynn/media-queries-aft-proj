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
              <li>
                <button>
                  MENU
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
                    alt="hamburger"
                  ></img>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className=""></div>
      </>
    );
  }
}

export default NavBar;
