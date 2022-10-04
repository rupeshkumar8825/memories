// this is form for the frontend for this purpose 
import React from "react";
import useStyles from "./styles.js"
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useState } from "react";
import FileBase from 'react-file-base64'


// defining the form component 
export const Form = ()=>{
    const classes = useStyles();


    // defining the state to store the post data for this purpose 
    const [postData, setPostData] = useState({
        creator : "", 
        title : "", 
        message : "", 
        tags : "", 
        selectedFile : ""
    });

    // defining the handler for handling the submit from the form 
    const handleSubmit = ()=>{
        console.log("The user has submitted the new post to store it to the db for this purpose\n");

        // say everything went fine 
        return;
    }

    // defining the handler to clear the form 
    const clear = ()=>{
        console.log("The user has cleared the entries for this case\n");

        // say everything went fine 
        return;
    }


    return (
        <>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={` ${classes.root} ${classes.form}`} onSubmit = {handleSubmit} action="">
                    <Typography variant="h6"> Creating a Memory</Typography>
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