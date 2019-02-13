import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import GridList from "@material-ui/core/GridList";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTile from "@material-ui/core/GridListTile";
import myImage from "../Assets/Pictures/Pacific-RGB.png";
import Button from "../Components/Button/button";
import Tooltip from "@material-ui/core/Tooltip";

const style = {
  background: "white",
  borderRadius: 9,
  border: 0,
  color: "black",
  height: 48,
  padding: "0 70px",
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .2)"
};

const divStyle = {
  display: "flex",
  alignItems: "center"
};

class MeetingRoomFinder extends Component {
  state = {
    filter: "",
    data: [
      {
        name: "Neha Wadha",
        location: "Home"
      },
      {
        name: "Jolene Farrel",
        location: "Home"
      },
      {
        name: "Julia Zhang",
        location: "Home"
      },
      {
        name: "Ajinkya Khairnar",
        location: "Home"
      },
      {
        name: "Jacky Li",
        location: "Office"
      },
      {
        name: "Karina Lee",
        location: "Office"
      },
      {
        name: "Emily Lok",
        location: "Office"
      },
      {
        name: "Joshua Sim",
        location: "Office"
      },
      {
        name: "Ange Leslie",
        location: "Office"
      },
      {
        name: "Tanmai Khairnar",
        location: "Office"
      },
      {
        name: "Luke Myatt",
        location: "OnSite"
      },
      {
        name: "Sang Mai",
        location: "OnSite"
      },
      {
        name: "Chris Smith",
        location: "OnSite"
      },
      {
        name: "Shivani",
        location: "Leave"
      },
      {
        name: "Zac Perillo",
        location: "Leave"
      },
      {
        name: "Khoa Tran",
        location: "Leave"
      }
    ]
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    return (
      <div
        style={{
          backgroundImage: "url(" + myImage + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh"
        }}
      >
        <center>
          <br /> <br />
          <h1> Where is my Team? </h1>
        </center>
        <div>
          <center>
            <Input
              style={style}
              disableUnderline={true}
              value={filter}
              onChange={this.handleChange}
              placeholder="Search for team member"
            />
          </center>
        </div>
        <br /> <br />
        <br />
        <center>
          {filteredData.map(item => (
            <div key={item.name}>
              <div>
                {item.location === "Home" && (
                  <GridList cellHeight={80} cols={1}>
                    <Button label={item.name} />
                  </GridList>
                )}
              </div>
              <div />
            </div>
          ))}
        </center>
      </div>
    );
  }
}

export default MeetingRoomFinder;
