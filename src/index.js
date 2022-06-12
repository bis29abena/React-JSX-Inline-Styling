//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let timeOftheDay;

const customeStyle = {
  color: ""
};

const time = new Date().getHours();

if ((time >= 6) & (time < 12)) {
  timeOftheDay = "Good Morning";
  customeStyle.color = "red";
} else if ((time >= 12) & (time < 18)) {
  timeOftheDay = "Good Afternoon";
  customeStyle.color = "green";
} else {
  timeOftheDay = "Good Night";
  customeStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={customeStyle} className="heading">
    {timeOftheDay}
  </h1>,
  document.getElementById("root")
);
