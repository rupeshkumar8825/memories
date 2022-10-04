// now we have to combine all the reducers here and then export to be able to use it in the index.js file 
import {combineReducers} from "redux";
import posts from "./posts.js"


export default combineReducers({
    posts,
});