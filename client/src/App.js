import React from "react";
import {Container , Typography, Grow, Grid, AppBar} from '@material-ui/core';
import memories from "./images/memories.png";
import {Posts} from "./components/Posts/Posts.js"
import {Form} from "./components/Form/Form.js"
import useStyles from "./styles.js"
import {useDispatch } from "react-redux";
import { useState } from "react";
import { getPosts } from "./actions/posts";
import { useEffect } from "react";



// defining the app functional component
function App() {
	const classes = useStyles();

	// we want to dispatch the action to get the posts and want to store the list of posts before hand itself 
	const dispatch = useDispatch();

	// defining the state 
	const [currentId, setCurrentId] = useState(null);

	// using the useeffect to store the list 
	useEffect(() => {
		console.log("The App has re rendered\n");
		dispatch(getPosts());
	}, [currentId, dispatch]);

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
							<Posts setCurrentId = {setCurrentId}></Posts>

						</Grid>
						<Grid item xs = {12} sm={4}>
							<Form currentId = {currentId} setCurrentId = {setCurrentId}></Form>

						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
}

export default App;
