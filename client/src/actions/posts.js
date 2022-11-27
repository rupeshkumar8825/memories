// defining the actions that are related to the posts 
import * as api from '../api';



//action creators
export const getPosts = ()=> async (dispatch) => {
    try {

        // first fetching the data from the api folder 
        const {data} = await api.fetchPosts();

        // dispatching the action to store the list of the posts 
        // once the data has been fetched then it will basicallly store the result in the redux store and hence we have to call the dispath function here for this purpose 
        dispatch({type : 'FETCH_ALL', payload : data});
    } catch (error) {
        // if any error occurs then it should print this message 
        console.log(error.message);
    }
}




// action to create the new post after sending post request to backend and then dispatching the action to update the post array in the redux store 
export const createPost = (newPost)=> async(dispatch) =>{
    try {
        const {data} = await api.createPost(newPost);

        // dispatch the action to udpate the post array value 
        dispatch({type : 'CREATE', payload : data});
    } catch (error) {
        
    }
}

// we have to define the action for updating the post 
// in this we will call the updatePost api to the apis folder 
export const updatePost = (currentId, postData) => async(dispatch)=>{
    try {
        const {data} = await api.updatePost(currentId, postData);

        // once we get the response from the server about the update we have to dispatch a new action to 
        // update the list of the posts 
        dispatch({type : 'UPDATE', payload : data});
    } catch (error) {
        
    }
}