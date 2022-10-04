// this is the post component to create new post 
import React from "react";
import { Post } from "./Post/Post";

// defining the posts components 
export const Posts = ()=>{
    return (
        <>
            <h1>Posts</h1>
            <Post></Post>
            <Post></Post>
        </>
    )
}

// say everything went fine 