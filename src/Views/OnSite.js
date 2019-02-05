import React, { Component } from "react";
import Button from "../Components/Button/button";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

const whitecolour = {
  color: "#FDFFFE"
};

class OnSite extends Component {
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
          <Typography
            component="h2"
            variant="h3"
            gutterBottom
            style={whitecolour}
          >
            Working on site?
          </Typography>
          <p1> How long will you be onsite until </p1>
          <br />
          <br />
          <input id="my-time" placeholder="Time (hh:mm)" />
          <br />
          <NavLink to="/home" style={{ textDecoration: "none" }}>
            <Button label="Confirm" onClick={this.toggleData} />
          </NavLink>
        </center>
      </div>
    );
  }
}

export default OnSite;
