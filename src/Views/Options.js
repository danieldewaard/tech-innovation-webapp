import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Checkbox from "../Components/Check/check";
import CheckD from "../Components/Check/checkDate";
import Dropdown from "../Components/Dropdown/dropdown";
import Button from "../Components/Button/button";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Typography from "@material-ui/core/Typography";

const whitecolour = {
  color: "#FDFFFE"
};
const divStyle = {
  display: "flex",
  alignItems: "center"
};

class Options extends Component {
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
            Options
          </Typography>
          <p1> Set work from home days</p1>
          <br />
          <CheckD />
          <Dropdown />
        </center>
        <center>
          <p style={{ marginLeft: "0px" }}>Set default location:</p>
          <p style={{ marginLeft: "470px" }}>
            <div style={divStyle}>
              State <Dropdown />
              Building
              <Dropdown />
              Floor
              <Dropdown />
            </div>
          </p>
        </center>
        <p style={{ marginLeft: "450px" }}>
          <Checkbox label="Show me as busy" />
          <Checkbox label="Allow reminders?" />
        </p>
        <center>
          <p /*align="right" style={{ marginRight: "0px" }}*/>
            <NavLink to="/home" style={{ textDecoration: "none" }}>
              <Button label="Save Options" onClick={this.toggleData} />
            </NavLink>
          </p>
        </center>
      </div>
    );
  }
}

export default Options;
