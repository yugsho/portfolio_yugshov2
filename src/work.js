import React, { Component } from "react";
import {Box, Card} from '@material-ui/core';

class Work extends Component {
  render() {
    return (
      <Box className="workcontent">
        <Card className="workproject">Project 1</Card>
        <Card className="workproject">Project 2</Card>
        <Card className="workproject">Project 3</Card>
      </Box>
    );
  }
}

export default Work;
