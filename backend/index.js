const express = require('express');
const app = express();
const cors = require('cors');
const Router = express.Router();
app.use(express.json());
const UserRouter = require("./routes/UserRouter");  
// only allowing particular endpoint to hit out backend 
app.use(cors());

// initalizing the routes 
app.use("/api/v1/user",UserRouter);


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})

