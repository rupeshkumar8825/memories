// in this all the handlers related to the posts will be done or the business logic will be written in this file itself 
import PostMessage from "../models/postMessage.js";


// each call back function will be having the try and catch block for error handling 

// this will help to make the application more scalable. 
export const getPosts = async (req, res)=>{
    // res.send("This works");
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}


// defining the business logic for creating new post 
export const createPost = async (req, res) =>{
    // creating the new post to be saved in the database 
    const post = req.body;
    console.log("The post that i got is as follows \n");
    console.log(post);
    const newPost = new PostMessage(post);
    console.log("The new post value after creating post message is \n");
    console.log(newPost);

    try {
        // saving this new post in db 
        await newPost.save()        
        res.status(201).json(newPost);

    } catch (error) {

        res.status(400).json({message : error.message});
    }
    // res.send("Created a post successfully\n");

}
