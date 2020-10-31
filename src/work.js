import React, { Component } from "react";
import {Box, Card} from '@material-ui/core';
import Progress from "./progressbar";

class Work extends Component {
  render() {
    return (
      <Box className="workcontent">

      <Box className="progresswrap">
      <Box><Progress done="50"/> <p className="workskill">React</p></Box>
      <Box><Progress done="65"/> <p className="workskill">Javascript</p></Box>
      <Box><Progress done="25"/> <p className="workskill">Ionic</p></Box>
      <Box><Progress done="80"/> <p className="workskill">HTML</p></Box>
      <Box><Progress done="80"/> <p className="workskill">CSS</p></Box>
      </Box>

      <Box className="cardwrap">
        <Card className="workproject">Project 1</Card>
        <Card className="workproject">Project 2</Card>
        <Card className="workproject">Project 3</Card>
      </Box>
      </Box>

    );
  }
}

export default Work;
