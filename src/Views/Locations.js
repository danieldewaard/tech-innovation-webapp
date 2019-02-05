import React, { Component } from "react";
import Button from "../Components/Button/button";
import { NavLink } from "react-router-dom";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Typography from "@material-ui/core/Typography";

const whitecolour = {
  color: "#FDFFFE"
};

class Locations extends Component {
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
          <br />
          <br />
          <Typography
            component="h2"
            variant="h3"
            gutterBottom
            style={whitecolour}
          >
            Where are you working?
          </Typography>
          <br />
          <NavLink to="/InOffice" style={{ textDecoration: "none" }}>
            <Button label="Office" onClick={this.toggleData} />
          </NavLink>
          <br />
          <Button label="Home" onClick={this.toggleData} /> <br />
          <NavLink to="/OnSite" style={{ textDecoration: "none" }}>
            <Button label="Out of office" onClick={this.toggleData} />
          </NavLink>
        </center>
      </div>
    );
  }
}

export default Locations;
