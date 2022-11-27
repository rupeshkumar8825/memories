// this is form for the frontend for this purpose 
import React from "react";
import useStyles from "./styles.js"
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useState } from "react";
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";
import { useEffect } from "react";
import { getPosts } from "../../actions/posts.js";


// defining the form component 
export const Form = (props)=>{
    
    const classes = useStyles();
    const dispatch = useDispatch();
    

    // defining the state to store the post data for this purpose 
    const [postData, setPostData] = useState({
        creator : "", 
        title : "", 
        message : "", 
        tags : "", 
        selectedFile : ""
    });

    // we have to fetch the value of the post corresponding to the id using the use selector for this purpose 
    const post = useSelector((state) => props.currentId ? state.posts.find((p) => p._id == props.currentId) :null);
    
    const clear = ()=>{
        console.log("The user has cleared the entries for this case\n");
        // we will have to set the value of the postdata as empty 
        setPostData({creator : "", 
        title : "", 
        message : "", 
        tags : "", 
        selectedFile : ""});
        props.setCurrentId(null);
        // say everything went fine 
        return;
    }
    
    const handleSubmit = (e)=>{
        console.log("The user has submitted the new post to store it to the db for this purpose\n");
        e.preventDefault();

        if(props.currentId)
        {
            console.log("updating the post\n");
            // we have to dispatch the update option for this post 
            dispatch(updatePost(props.currentId, postData));
            console.log("I came here1");
            clear();
            
            
            
        }
        else
        {
            // then we have to create the new post in the database 
            console.log("creating the post\n");

            dispatch(createPost(postData));
            // we have to call the getposts function to fetch the updated posts for this purpose 
            console.log("I came here1");
            clear();
            
        }

        // say everything went fine 
        return;
    }




    // we have to render the form whenever the user selects the three dot 
    // we have to use the useeffect for this purpose 
    useEffect(() => {
        console.log("The current id has been changed inside the form useeffect", props.currentId);
        if(props.currentId)
        {
            // clear();
            // we have  to set the value of the current postdata 
            setPostData({creator : post.creator, 
            title : post.title, 
            message : post.message, 
            tags : post.tags, 
            selectedFile : post.selectedFile});
            // props.setCurrentId(null);
            
            

        }
        return () => {
            
        };
    }, [props.currentId]);

    return (
        <>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={` ${classes.root} ${classes.form}`} onSubmit = {handleSubmit} action="">
                    <Typography variant="h6"> {props.currentId ? "Editing" :"Creating"} a Memory</Typography>
                    <TextField 
                        name = 'creator' 
                        variant="outlined" 
                        fullWidth
                        value = {postData.creator}
                        label = 'Creator'
                        onChange = {(e) => setPostData({...postData, creator : e.target.value})}
                    />
                    <TextField 
                        name = 'title' 
                        variant="outlined" 
                        fullWidth
                        value = {postData.title}
                        label = 'Title'
                        onChange = {(e) => setPostData({...postData, title : e.target.value})}
                    />
                    <TextField 
                        name = 'message' 
                        variant="outlined" 
                        fullWidth
                        value = {postData.message}
                        label = 'Message'
                        onChange = {(e) => setPostData({...postData, message : e.target.value})}
                    />
                    <TextField 
                        name = 'tags' 
                        variant="outlined" 
                        fullWidth
                        value = {postData.tags}
                        label = "Tags"
                        onChange = {(e) => setPostData({...postData, tags : e.target.value})}
                    />
                    <div className={classes.fileInput}>
                        <FileBase
                            type = 'file'
                            multiple = {false}
                            onDone = {({base64}) => setPostData({...postData, selectedFile : base64})}
                        />

                        
                    </div>


                    <Button className = {classes.buttonSubmit} variant = "contained" color="primary"  type = 'submit' size = "large" fullWidth>Submit</Button>
                    
                    <Button  variant = "contained" color="secondary" size = "small" onClick={clear} fullWidth>Clear</Button>
                    
                </form>

            </Paper>
        </>
    )
}

// say everything went fine 