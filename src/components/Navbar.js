import React from "react";
import "./Navbar.scss";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="container">
          <img src="/img/logo.svg" className="logo"></img>
          <ul className="links hidden">
            <li>About</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
          <div className="burgermenu">
            <img src="/img/burger.svg"></img>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
