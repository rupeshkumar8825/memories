import React from "react";
import useStyles from "./styles.js"
import { Card, CardActions, CardContent, CardMedia, Button,Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

// defining the post component
export const Post = (props)=>{
    const classes = useStyles();

    // defining the handler for the onclick event on the three dots 
    const handleOnClickOnThreeDots = ()=>{
        console.log("The user wants to update the post \n");
        // we have to set the current id as this post id 
        props.setCurrentId(props.post._id);
        // and we also have to fill the form with the content of this post 
        // say everything went fine 
        return;

        
    }
    return (
        <>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={props.post.selectedFile} title = {props.post.title}/>
                
                <div className={classes.overlay}>
                    <Typography variant = "h6"> {props.post.creator} </Typography>
                    <Typography variant = "body2"> {moment(props.post.createdAt).fromNow()} </Typography>
                </div>

                <div className={classes.overlay2}>
                    <Button style={{color : "white" }} size = "small" onClick={handleOnClickOnThreeDots}>
                        <MoreHorizIcon fontSize = "default"/>
                    </Button>
                </div>

                <div className={classes.details}>
                    <Typography variant = "body2" color = "textSecondary"> {props.post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>


                <CardContent>
                    <Typography className={classes.title} variant = "h5" color = "primary"> {props.post.message}</Typography>

                </CardContent>

                <CardActions className={classes.cardActions}>
                    <Button size = "small" color = "primary" onClick={() => {}}>
                        <ThumbUpAltIcon fontSize = "small"></ThumbUpAltIcon>
                        Like 
                        {props.post.likeCount}
                    </Button>

                    <Button size = "small" color = "primary" onClick={() => {}}>
                        <DeleteIcon fontSize = "small"></DeleteIcon>
                        Delete 
                    </Button>
                </CardActions>


            </Card>
        </>
    )
}