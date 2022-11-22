import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from 'cors'
import postRoutes from "./routes/posts.js";

const app = express();


// setting the body parser so that we can properly send the request for this purpose to the application 
app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}))
app.use(cors());


// acting as the middleware to route the apis to the postroutes 
app.use('/posts', postRoutes);


// now we have to add the connection url for the hosted database over the cloud in the mongodb 
const CONNECTION_URL = 'mongodb+srv://rupeshadmin:rupeshadmin123@cluster0.o49kxye.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

// connecting to the database  and starting the port on which the server will be activated
mongoose.connect(CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology : true}).then(()=> app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))).catch((error)=> console.log(error.message));


// mongoose.set('useFindAndModify', false);




