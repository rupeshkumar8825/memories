// here we will define the model for the post to store it in the mongodb database 
import mongoose from "mongoose";


// we have to create a schema 
const postSchema = mongoose.Schema({
    title : String, 
    message : String, 
    tags : [String],
    selectedFile : String, 
    likeCount : {
        type : Number, 
        default : 0
    },
    createdAt : {
        type : Date, 
        default : new Date()
    }
})

// now we have the schema we have to now convert it to the model 
const PostMessage = mongoose.model('PostMessage', postSchema);


// now we are exporting this model which will be used to the store the post message for this purpose 

export default PostMessage;