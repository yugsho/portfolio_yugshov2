import React, { Component } from "react";
import { Box } from '@material-ui/core';
import me from './pictures/me.jpg';

class About extends Component {
  render() {
    return (
      <Box className="aboutcontent">
        <h2>Hi, I'm Emilio. Nice to meet you.</h2>

        <Box>
        <p className="aboutdescription">I’m a 21 year old web designer & front-end developer located in Tilburg.
        I enjoy making clean and minimalistic websites that do what they need to do.
        During my study I’ve had to work with Html, Css, Javascript, React and some Ionic.
        I'm taking my current semester to gain more experience with React.</p>
        </Box>

        <Box>
        <img className="aboutfoto" src={me} alt="Logo" />
        </Box>

      </Box>
    );
  }
}

export default About;
