const express=require("express")
const router = express.Router();

const FAQ = require("./Schema/FAQ")
router.post("/", async (req,res)=>{
    
    res.send("hello owais");
    res.send(req.body.Question)
    const faq = new FAQ({
      Question: req.body.Question,
      Answer: req.body.Answer
    
    }); 
    const SavedFAQ = await faq.save();
    res.json(SavedFAQ);    


})

module.exports = router; 