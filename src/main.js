import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Work from "./work";
import {Box} from '@material-ui/core';

//This React class acts as the navigation of the application
//It puts a link on a list element and in a div below assigns the components that the links go to
class Main extends Component {
  render() {
    return (
      <Box position="static">
        <HashRouter>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/work">Work</NavLink></li>
          </ul>
          <Box className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/work" component={Work}/>
          </Box>
          </HashRouter>
      </Box>
    );
  }
}

export default Main;
