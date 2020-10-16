import React, { Component } from "react";
import background from './pictures/background.jpg';
import { Box } from '@material-ui/core';

class Home extends Component {
  render() {
    return (
<Box className="homecontainer">
      <Box className="homecontent">
        <h2 className="homeh2">Webdesigner & Front-end Developer</h2>

        <p>I design websites and code them in a beautifull way</p>
      </Box>

      <Box className="footer">
      <p> > </p>
      </Box>

</Box>
    );
  }
}

export default Home;
