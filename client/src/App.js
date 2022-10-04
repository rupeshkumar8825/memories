import React from "react";
import {Container , Typography, Grow, Grid, AppBar} from '@material-ui/core';
import memories from "./images/memories.png";
import {Posts} from "./components/Posts/Posts.js"
import {Form} from "./components/Form/Form.js"

// defining the app functional component
function App() {
  return (

    // defining the container that will automatically be aligned at the center for this purpose 
    <Container maxWidth = 'lg'>
    	<AppBar position="static" color="inherit">
    		<Typography variant = 'h2' align = "center"> Memories</Typography>
        	<img src={memories} alt="memories" height="400"/>
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
