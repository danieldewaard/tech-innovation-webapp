import React, { Component } from "react";
import OfficeButton from "../Components/Button/OfficeButton";
import HomeButton from "../Components/Button/HomeButton";
import OffSiteButton from "../Components/Button/OffSiteButton";
import LeaveButton from "../Components/Button/LeaveButton";
import { NavLink } from "react-router-dom";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Typography from "@material-ui/core/Typography";

const whitecolour = {
  color: "#FDFFFE"
};

class TeamLocations extends Component {
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
            Where is my team?
          </Typography>
          <br />
          <OfficeButton label="Sally" onClick={this.toggleData} />
          <HomeButton label="Alice" onClick={this.toggleData} />
          <OffSiteButton label="Julie" onClick={this.toggleData} />
          <LeaveButton label="John" onClick={this.toggleData} />
        </center>
      </div>
    );
  }
}

export default TeamLocations;
