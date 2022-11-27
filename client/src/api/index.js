// in this we will implement the api calls for abstracting out from the actual user 
// we will be using the axios for this purpose 
import axios from 'axios';

const url = 'http://localhost:5000/posts';


// defining the function to fetch the posts from backend 
export const fetchPosts = ()=> {
    return axios.get(url);
}


// defining the api to create a new post
export const createPost = (newPost)=>{
    console.log("Made the post reques to the server with the new post as given below \n", newPost);
    return axios.post(url, newPost);

}

// defining the patch end point to update the current post 
export const updateThePost = async (currentId, postData)=>{
    console.log("Made the patch request to update the content of the current post\n");

    // this will return the response back to the action that we have dispatch to update the post details 
    // in the response it will send the udpated post message 
    console.log("The current id of the post is ", currentId);
    console.log("The current url that is hit is ", url + `${currentId}`);
    const response = await axios.patch(url+`/${currentId}`, postData);
    console.log("The received response from the server side is as follows\n", response);
    return response;

}
// say everything went fine 