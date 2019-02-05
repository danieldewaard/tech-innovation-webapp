import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Button from "../Components/Button/button";
import Typography from "@material-ui/core/Typography";

import "../styles.css";

const whitecolour = {
  color: "#FDFFFE"
};

class Home extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + myImage + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 700
        }}
      >
        <center>
          <br /> <br />
          <Typography
            component="h2"
            variant="h3"
            gutterBottom
            style={whitecolour}
          >
            Telstra Pinpoint
          </Typography>
          <br />
          <NavLink to="/Locations" style={{ textDecoration: "none" }}>
            <Button label="Log location" onClick={this.toggleData} />
          </NavLink>
          <br />
          <NavLink to="/locations" style={{ textDecoration: "none" }}>
            <Button label="Find Team" onClick={this.toggleData} />
          </NavLink>
          <br />
          <NavLink to="/Options" style={{ textDecoration: "none" }}>
            <Button label="Options" onClick={this.toggleData} />
          </NavLink>
        </center>
      </div>
    );
  }
}

export default Home;
