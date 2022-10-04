// this is the post component to create new post 
import React from "react";
import { Post } from "./Post/Post";
import useStyles from "./styles.js"

// defining the posts components 
export const Posts = ()=>{
    const classes = useStyles();
    return (
        <>
            <h1>Posts</h1>
            <Post></Post>
            <Post></Post>
        </>
    )
}

// say everything went fine 