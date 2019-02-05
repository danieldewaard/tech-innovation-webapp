import React, { Component } from "react";
import Button from "../Components/Button/button";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Typography from "@material-ui/core/Typography";

const whitecolour = {
  color: "#FDFFFE"
};

class AtOffice extends Component {
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
            Working in the office?
          </Typography>
          <br />
          <Button label="Location 1" onClick={this.toggleData} />
          <Button label="Location 2" onClick={this.toggleData} />
          <Button label="Location 3" onClick={this.toggleData} />
        </center>
      </div>
    );
  }
}

export default AtOffice;
