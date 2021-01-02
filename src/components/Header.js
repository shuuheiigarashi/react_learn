import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {/* <Link to="/">Home</Link> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
}

export default Header;
