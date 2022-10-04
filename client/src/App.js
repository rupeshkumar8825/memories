import React from "react";
import {Container , Typography, Grow, Grid, AppBar} from '@material-ui/core';
import memories from "./images/memories.png";
import {Posts} from "./components/Posts/Posts.js"
import {Form} from "./components/Form/Form.js"
import useStyles from "./styles.js"

// defining the app functional component
function App() {
	const classes = useStyles();
  return (

    // defining the container that will automatically be aligned at the center for this purpose 
    <Container maxWidth = 'lg'>
    	<AppBar className={classes.appBar} position="static" color="inherit">
    		<Typography className = {classes.heading} variant = 'h2' align = "center"> Memories</Typography>
        	<img className= {classes.image} src={memories} alt="memories" height="60"/>
      	</AppBar> 
      	<Grow in>
        	<Container>
          		<Grid container justify = "space-between" alignItems="stretch" spacing={4}>
            		<Grid item xs = {12} sm={7}>
						<Posts></Posts>

            		</Grid>
					<Grid item xs = {12} sm={4}>
						<Form></Form>

            		</Grid>
          		</Grid>
        	</Container>
      	</Grow>
    </Container>
  );
}

export default App;
