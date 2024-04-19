const { Router }  = require("express");
const router = Router();
const model = require('../utlis/chat');
// initalized the router

router.post("/chat",async(req,res)=>{
    console.log("got the request");
    try {
        const prompt  = req.body.prompt;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text(); 
        res.status(200).json({
            msg : "success",
            response : text 
        }) 
    } catch (error) {
        res.status(400).json({
            msg : "error",

        })
    }
});
// exporting the Router 
// 
module.exports = router 