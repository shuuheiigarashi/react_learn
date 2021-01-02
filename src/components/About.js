import React from "react";
import Header from "./Header";

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="about">
          <h1>About</h1>
          <p>1993/06/18</p>
          <p></p>
        </div>
      </div>
    );
  }
}

export default About;
