const express = require("express");
const data = require("../models/Schema")
const db = require("../models/connection")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("hello mongodb in node.js");
    console.log("hello mongodb in node.js");
})


router.post("/saved",async(req,res)=>{
    try{
        let new_data = new data(req.body)
        new_data.save().then((data)=>{
            res.send(data);
            console.log(data);
        }).catch((er)=>{
            console.log(er);
        })
    }catch{
        console.log(error);
    }
})

router.get("/all_data",async(req,res)=>{
    try{
        var mysort = { name: 1 }; 
        data.find().sort(mysort)
        .then((data)=>{
            res.send(data);
            console.log(data);
        }).catch((er)=>{
            console.log(er);
        })
    }catch(err){
        console.log(err);
    }
})


router.get("/specific_data/:roll",async(req,res)=>{
    try{
        data.find({roll:req.params.roll})
        .then((data)=>{
            res.send(data);
            console.log(data);
        }).catch((er)=>{
            console.log(er);
        })
    }catch(error){
        console.log(error);
    }
})

router.put("/update/:roll",async(req,res)=>{
    try{
        data.find({roll:req.params.roll , education:req.body.education})
        .updateOne(req.body)
        .then((data)=>{
            res.send(data);
            console.log(data);
        }).catch((er)=>{
            console.log(er);
        })
    }catch(err){
        console.log(err);
    }
})

router.delete("/delete/:roll",async(req,res)=>{
    try{
        data
        .remove({roll:req.params.roll})
        .then((data)=>{
            res.send("data delete successfully,...");
            console.log("data delete successfully,...");
        }).catch((er)=>{
            console.log(er);
        })
    }catch(err){
        console.log(err);
    }
})

module.exports = router;