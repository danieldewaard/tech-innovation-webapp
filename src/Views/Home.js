import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Button from "../Components/Button/button";

class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Home Page</h1>
          <br />
          <p1> Welcome to xx, what would you like to do ?</p1>
          <br />
          <br />
          <br />
          <Button
            label="Log location"
            onClick={this.toggleData}
            href="/locations"
          />
          <Button label="Find Team" onClick={this.toggleData} href="/find" />
          <Button label="Options" onClick={this.toggleData} href="/options" />
        </center>
      </div>
    );
  }
}

export default Home;
