let express = require("express");
let app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send("hello word");
})

app.listen(7000);

