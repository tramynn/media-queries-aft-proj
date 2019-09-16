import React, { Component } from "react";
import "../styles/NavBar.css";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      menuOpenStatus: "dropdown-menu"
    };
  }

  toggle = () => {
    if (
      this.state.menuOpenStatus === "dropdown-menu-close" ||
      this.state.menuOpenStatus === "dropdown-menu"
    ) {
      this.setState({
        menuOpenStatus: "dropdown-menu-open"
      });
    } else if (this.state.menuOpenStatus === "dropdown-menu-open") {
      this.setState({
        menuOpenStatus: "dropdown-menu-close"
      });
    }
  };

  render() {
    return (
      <>
        <nav>
          <div>
            <h1>Start Bootstrap</h1>
          </div>
          <div>
            <ul>
              <li className="nav-links">Services</li>
              <li className="nav-links">Portfolio</li>
              <li className="nav-links">About</li>
              <li className="nav-links">Team</li>
              <li className="nav-links">Contact</li>
              <li className="menu-button hidden-by-default">
                <button onClick={this.toggle}>
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
        <div className={`${this.state.menuOpenStatus}`}>
          <div className="dropdown-style">
            <h2>Services</h2>
            <h2>Portfolio</h2>
            <h2>About</h2>
            <h2>Team</h2>
            <h2>Contact</h2>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
