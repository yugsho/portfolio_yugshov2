import React, { Component } from "react";
import { Box } from '@material-ui/core';

class Home extends Component {
  render() {
    return (
<Box className="homecontainer">
      <Box className="homecontent">
        <h2 className="homeh2">Webdesigner & Front-end Developer</h2>
        <p>I design and code minimalistic looking websites</p>
      </Box>

</Box>
    );
  }
}

export default Home;
