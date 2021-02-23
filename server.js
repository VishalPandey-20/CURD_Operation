const express = require("express");
const app = express()



require("./models/connection");
require("./models/Schema")


const router = require("./routes/router")
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/",router)



const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is runnig on ${port}`);
})