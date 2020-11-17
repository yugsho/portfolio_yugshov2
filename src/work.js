import React, { Component } from "react";
import {Box, Card, Grid} from '@material-ui/core';
import Progress from "./progressbar";

class Work extends Component {
  render() {
    return (

      <Box className="workcontent">

      <Grid container item xs={12} sm={12} style={{height:"78vh", marginBottom:"12vh"}} spacing={0}>

      <Grid container item xs={12} sm={12} justify="center" alignItems="center">
      <Grid item xs={5} sm={3}><Progress done="50"/></Grid> <Grid item xs={4} sm={2}><p className="workskill">React</p></Grid>
      </Grid>

      <Grid container item xs={12} sm={12} justify="center" alignItems="center">
      <Grid item xs={5} sm={3}><Progress done="65"/></Grid> <Grid item xs={4} sm={2}><p className="workskill">Javascript</p></Grid>
      </Grid>

      <Grid container item xs={12} sm={12} justify="center" alignItems="center">
      <Grid item xs={5} sm={3}><Progress done="25"/></Grid> <Grid item xs={4} sm={2}><p className="workskill">Ionic</p></Grid>
      </Grid>

      <Grid container item xs={12} sm={12} justify="center" alignItems="center">
      <Grid item xs={5} sm={3}><Progress done="35"/></Grid> <Grid item xs={4} sm={2}><p className="workskill">Material-ui</p></Grid>
      </Grid>

      <Grid container item xs={12} sm={12} justify="center" alignItems="center">
      <Grid item xs={5} sm={3}><Progress done="45"/></Grid> <Grid item xs={4} sm={2}><p className="workskill">Firebase</p></Grid>
      </Grid>

      <Grid container item xs={12} sm={12} justify="center" alignItems="center">
      <Grid item xs={5} sm={3}><Progress done="80"/></Grid> <Grid item xs={4} sm={2}><p className="workskill">HTML</p></Grid>
      </Grid>

      <Grid container item xs={12} sm={12} justify="center" alignItems="center">
      <Grid item xs={5} sm={3}><Progress done="75"/></Grid> <Grid item xs={4} sm={2}><p className="workskill">CSS</p></Grid>
      </Grid>

      </Grid>

      <Grid container className="footer" item xs={12} justify="center" style={{position:"absolute", bottom:"0", color:"white", height:"2rem", fontSize:"1.4vw", width:"98%"}}> <a>\/</a> </Grid>

      <Grid container direction="row" justify="space-evenly" justify="center" alignItems="flex-start" alignItems="center" spacing={4} className="cardwrap">
      <Grid item xs={12} sm={4}>
      <Card style={{backgroundColor: "#404040"}} className="workproject">
       <h2 className="cardh2font">React</h2>
       <p className="cardpfont">I've worked with React on multiple school projects.
       I've gotten a lot of experience with coding layouts in React and how to code in a modular way.</p>
       </Card>
       </Grid>
       <Grid item xs={12} sm={4}>
       <Card style={{backgroundColor: "#404040"}} className="workproject">
       <h2 className="cardh2font">Ionic</h2>
       <p className="cardpfont">I've worked with Ionic during a school project which was making a medical application together with a back-end team.
       I've gotten experience with creating a layout in Ionic and building up the connection between the front-end and back-end.</p>
       </Card>
       </Grid>
       <Grid item xs={12} sm={4}>
       <Card style={{backgroundColor: "#404040"}} className="workproject">
       <h2 className="cardh2font">Javascript</h2>
       <p className="cardpfont">During almost every school project I've used some sort of javascript to build a website.
       This means I've gotten pretty comfortable with vanilla Javascript.</p>
       </Card>
       </Grid>
       <Grid item xs={12} sm={4}>
       <Card style={{backgroundColor: "#404040"}} className="workproject">
       <h2 className="cardh2font">Firebase</h2>
       <p className="cardpfont">I've used Firebase in vanilla javascript and in React during school projects and have a basic understanding of getting things in and out of databases.</p>
       </Card>
       </Grid>
       <Grid item xs={12} sm={4}>
       <Card style={{backgroundColor: "#404040"}} className="workproject">
       <h2 className="cardh2font">Material-ui</h2>
       <p className="cardpfont">While working with React I've used Material-ui for styling and for the grid functionality</p>
       </Card>
       </Grid>
      </Grid>

      </Box>

    );
  }
}

export default Work;
