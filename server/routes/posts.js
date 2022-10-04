// in this we  will be adding all the routes that are related to handling the post on the memories application 
import express from 'express'
import { getPosts, createPost } from '../controllers/posts.js';

// setting up the router 
const router = express.Router();


// we will not write the business logic in this because the business logic will be large and hence this file will also become large due to which managing this particular file will be very hard and will be totally lost while searching the routes and adding the new routes 

router.get('/', getPosts);
router.post('/', createPost);

// exporting the router 
export default router;