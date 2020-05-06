
const express = require ("express");
// Creating the node server
const app = express();
// Port Environment variable
const PORT = process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.send ("we are good");
});

app.listen(PORT,()=>{
    console.log("server started on port 8000");
}); 


module.exports = app;

