// this is the post component to create new post 
import React from "react";
import { useSelector } from "react-redux";
import { Post } from "./Post/Post";
import useStyles from "./styles.js"
// import posts from "../../reducers/posts.js"

// defining the posts components 
export const Posts = ()=>{
    const classes = useStyles();

    // now here we have to take the list of the posts stored in the store for this purpose 
    const posts = useSelector((state) => state.posts);
    console.log("The list of posts that we got is as follows\n");
    console.log(posts);


    return (
        <>
            <h1>Posts</h1>
            <Post></Post>
            <Post></Post>
        </>
    )
}

// say everything went fine 