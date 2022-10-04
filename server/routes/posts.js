// in this we  will be adding all the routes that are related to handling the post on the memories application 
import express from 'express'

// setting up the router 
const router = express.Router();


router.get('/', (req, res)=>{
    res.send("this works");
})


// exporting the router 
export default router;