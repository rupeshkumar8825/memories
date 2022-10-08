// in this we will implement the api calls for abstracting out from the actual user 
// we will be using the axios for this purpose 
import axios from 'axios';

const url = 'http://localhost:5000/posts';


// defining the function to fetch the posts from backend 
export const fetchPosts = ()=> {
    return axios.get(url);
}


// defining the api to create a new post
export const createPost = ()=>{
    return axios.post(url);

}
// say everything went fine 