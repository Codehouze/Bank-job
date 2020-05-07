
const express = require ("express");
// Creating the node server
const app = express();
// Port Environment variable
const PORT = process.env.PORT || 5000;
const path = require ("path");

if(!dev){

    app.disable('x-powered-by');
    app.use(express.static(path.join(__dirname, 'build')));

    app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'build', index.html));
});
}


app.get("/",(req,res)=>{
    res.send ("we are good");
});

app.listen(PORT,()=>{
    console.log("server started on port 8000");
}); 


module.exports = app;

