// defining the actions that are related to the posts 
import * as api from '../api';

//action creators
export const getPosts = ()=> async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();

        // dispatching the action to store the list of the posts 
        dispatch({type : 'FETCH_ALL', payload : data});
    } catch (error) {
        console.log(error.message);
    }
}