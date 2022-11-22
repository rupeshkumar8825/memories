// this is the post component to create new post 
import React from "react";
import { useSelector } from "react-redux";
import { Post } from "./Post/Post";
import useStyles from "./styles.js"
import { Grid, CircularProgress } from "@material-ui/core";
// import posts from "../../reducers/posts.js"

// defining the posts components 
export const Posts = ()=>{
    const classes = useStyles();

    // now here we have to take the list of the posts stored in the store for this purpose 
    const posts = useSelector((state) => state.posts);
    console.log("The list of posts that we got is as follows\n");
    console.log(posts);

    // using conditional rendering here using the if else statement 
    if(posts.length == 0)
    {
        // then we have to show the circular progressbar on the UI for this purpose 
        return (
            <CircularProgress></CircularProgress>
        )

    }
    else
    {
        // we have to show the grid of the posts in order to show all the post that is stored in the database 
        return (
            <Grid className="{classes.container}" container alignItems="stretch" spacing ={3}>
                {/* we have to loop over the posts list */}
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post = {post}></Post>
                    </Grid>
                ))}


            </Grid>
        )

    }


    return (
        <>
            <h1>Posts</h1>
            <Post></Post>
            <Post></Post>
        </>
    )
}

// say everything went fine 